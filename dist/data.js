export const salon = {
 name: 'Hair by Four Salon', phone: '(281) 477-9044', tel: '+12814779044',
 address: '9344 Jones Road, Suite J', city: 'Houston, TX 77065',
 directions: 'https://www.google.com/maps/search/?api=1&query=Hair+by+Four+Salon+9344+Jones+Road+Suite+J+Houston+TX+77065',
 hours: [[11,19],[9.5,19],[9.5,19],[9.5,19],[9,18],[9,18],null],
};
export const services = [
 {id:'cut', category:'Cut & style', name:'Haircut & finish', description:'A fresh shape, a thoughtful consultation, and a finish that feels like you.', duration:60},
 {id:'family', category:'Cut & style', name:'Family haircuts', description:'A new look or a simple refresh for adults and children.', duration:45},
 {id:'color', category:'Color & highlights', name:'Hair color', description:'Explore a rich new shade or refresh your signature color with your stylist.', duration:120},
 {id:'highlights', category:'Color & highlights', name:'Highlights', description:'Light, dimension, and carefully placed brightness to bring your color to life.', duration:150},
 {id:'blowout', category:'Cut & style', name:'Blowout & styling', description:'Smooth movement, soft volume, or an effortlessly polished finish.', duration:60},
 {id:'perm', category:'Texture & occasion', name:'Perm & texture', description:'Talk with your stylist about texture, movement, and a shape that works for your hair.', duration:150},
 {id:'updo', category:'Texture & occasion', name:'Updos & occasion styling', description:'A considered finishing touch for celebrations and memorable moments.', duration:90},
];
export const looks = [
 {id:'brunette', name:'Lived-in brunette', type:'Color', category:'Color & highlights', panel:0, note:'Soft caramel dimension with a natural-looking grow-out.'},
 {id:'bob', name:'The French bob', type:'Cuts', category:'Cut & style', panel:1, note:'A clean silhouette, gentle fringe, and a little Parisian attitude.'},
 {id:'curls', name:'Natural movement', type:'Texture', category:'Texture & occasion', panel:2, note:'Defined curls and volume that celebrate your natural texture.'},
 {id:'copper', name:'Copper glow', type:'Color', category:'Color & highlights', panel:3, note:'Warm copper tones with airy, face-framing layers.'},
 {id:'taper', name:'Textured taper', type:'Cuts', category:'Cut & style', panel:4, note:'A fresh taper with an easy, textured finish.'},
 {id:'blonde', name:'Soft blonde', type:'Color', category:'Color & highlights', panel:5, note:'Luminous blonde dimension and soft, touchable waves.'},
];
// Demo timing assumptions, not the salon's confirmed appointment durations.
export function hoursForDate(date) { return salon.hours[(date.getDay()+6)%7]; }
export function dateKey(date) { return `${date.getFullYear()}-${String(date.getMonth()+1).padStart(2,'0')}-${String(date.getDate()).padStart(2,'0')}`; }
export function slotsForDate(date, duration=60, now=new Date()) {
 const hours=hoursForDate(date); if(!hours) return [];
 const start=hours[0]*60,end=hours[1]*60; const result=[];
 for(let minutes=start;minutes+duration<=end;minutes+=30) {
  const at=new Date(date); at.setHours(Math.floor(minutes/60),minutes%60,0,0);
  if(at>now) result.push({value:`${String(Math.floor(minutes/60)).padStart(2,'0')}:${String(minutes%60).padStart(2,'0')}`,label:at.toLocaleTimeString('en-US',{hour:'numeric',minute:'2-digit'})});
 }
 return result;
}
