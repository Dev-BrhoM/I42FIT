import { Capacitor } from '@capacitor/core';
import { Health } from '@capgo/capacitor-health';
const input=document.getElementById('activityManual');
const save=document.getElementById('activityManualSave');
if(Capacitor.isNativePlatform() && input && save){
 const btn=document.createElement('button');
 btn.type='button';btn.className='btn';btn.style.margin='8px';
 const status=document.createElement('p');status.className='meta';status.setAttribute('role','status');
 const ar=()=>document.documentElement.lang==='ar';
 const label=()=>{btn.textContent=ar()?'مزامنة خطوات الصحة':'Sync health steps';};
 label();new MutationObserver(label).observe(document.documentElement,{attributes:true,attributeFilter:['lang']});
 save.after(btn,status);
 btn.onclick=async()=>{
  btn.disabled=true;
  try{
   const available=await Health.isAvailable();
   if(!available.available) throw Error('unavailable');
   await Health.requestAuthorization({read:['steps'],write:[]});
   const end=new Date(),start=new Date(end);start.setHours(0,0,0,0);
   const result=await Health.queryAggregated({dataType:'steps',startDate:start.toISOString(),endDate:end.toISOString(),bucket:'day',aggregation:'sum'});
   const samples=result.samples;
   if(!Array.isArray(samples)||!samples.length){status.textContent=ar()?'لا توجد بيانات متاحة؛ تحقق من إذن القراءة.':'No accessible data; check read permission.';return;}
   const total=Math.round(samples.reduce((sum,s)=>{if(typeof s.value!=='number'||!Number.isFinite(s.value)||s.value<0)throw Error('invalid');return sum+s.value;},0));
   if(total>200000||new Date().toDateString()!==end.toDateString())throw Error('invalid day or total');
   input.value=String(total);
   save.click();
   status.textContent=ar()?'تم استيراد إجمالي خطوات اليوم من تطبيق الصحة.':'Imported today’s health step total.';
  }catch(e){status.textContent=ar()?'تعذرت المزامنة؛ تحقق من الإذن وتوفر تطبيق الصحة.':'Sync failed; check permissions and health availability.';}
  finally{btn.disabled=false;}
 };
}
