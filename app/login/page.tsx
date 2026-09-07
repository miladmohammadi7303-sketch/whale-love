'use client';
import { useEffect,useState } from 'react';
import { supabase } from '@/lib/supabase';
import { useRouter } from 'next/navigation';

export default function Login(){const router=useRouter();const [busy,setBusy]=useState(false);const [error,setError]=useState('');
useEffect(()=>{supabase.auth.getSession().then(({data})=>{if(data.session) router.replace('/discover')})},[router]);
async function google(){setBusy(true);setError('');const {error}=await supabase.auth.signInWithOAuth({provider:'google',options:{redirectTo:window.location.origin+'/discover'}});if(error){setError(error.message);setBusy(false)}}
return <main className="shell page" style={{minHeight:'100vh',display:'grid',placeItems:'center'}}><section className="glass content" style={{width:'min(460px,100%)',padding:'34px'}}><div className="center"><div className="brand gold" style={{fontSize:34}}>Whale Love</div><p className="muted">ورود امن با حساب Google</p></div><button className="btn primary" style={{width:'100%',marginTop:24}} onClick={google} disabled={busy}>{busy?'در حال انتقال...':'ورود با Google'}</button>{error&&<p style={{color:'#ff8c8c',marginTop:16}}>{error}</p>}<p className="muted" style={{fontSize:12,lineHeight:2,marginTop:22}}>با ورود، قوانین استفاده و سیاست حریم خصوصی Whale Love را می‌پذیرید. استفاده از سرویس برای افراد ۱۸ سال به بالا است.</p></section></main>}
