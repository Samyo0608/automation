(self.webpackChunkdemo=self.webpackChunkdemo||[]).push([[979],{1848:(e,t,r)=>{var o,s=Object.create,i=Object.defineProperty,l=Object.getOwnPropertyDescriptor,a=Object.getOwnPropertyNames,n=Object.getPrototypeOf,u=Object.prototype.hasOwnProperty,p=(e,t,r,o)=>{if(t&&"object"===typeof t||"function"===typeof t)for(let s of a(t))u.call(e,s)||s===r||i(e,s,{get:()=>t[s],enumerable:!(o=l(t,s))||o.enumerable});return e},h=(e,t,r)=>(((e,t,r)=>{t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r})(e,"symbol"!==typeof t?t+"":t,r),r),d={};((e,t)=>{for(var r in t)i(e,r,{get:t[r],enumerable:!0})})(d,{default:()=>f}),e.exports=(o=d,p(i({},"__esModule",{value:!0}),o));var c=((e,t,r)=>(r=null!=e?s(n(e)):{},p(!t&&e&&e.__esModule?r:i(r,"default",{value:e,enumerable:!0}),e)))(r(5043)),y=r(2206),m=r(1520);class f extends c.Component{constructor(){super(...arguments),h(this,"callPlayer",y.callPlayer),h(this,"duration",null),h(this,"currentTime",null),h(this,"fractionLoaded",null),h(this,"mute",(()=>{this.setVolume(0)})),h(this,"unmute",(()=>{null!==this.props.volume&&this.setVolume(this.props.volume)})),h(this,"ref",(e=>{this.iframe=e}))}componentDidMount(){this.props.onMount&&this.props.onMount(this)}load(e,t){(0,y.getSDK)("https://w.soundcloud.com/player/api.js","SC").then((r=>{if(!this.iframe)return;const{PLAY:o,PLAY_PROGRESS:s,PAUSE:i,FINISH:l,ERROR:a}=r.Widget.Events;t||(this.player=r.Widget(this.iframe),this.player.bind(o,this.props.onPlay),this.player.bind(i,(()=>{this.duration-this.currentTime<.05||this.props.onPause()})),this.player.bind(s,(e=>{this.currentTime=e.currentPosition/1e3,this.fractionLoaded=e.loadedProgress})),this.player.bind(l,(()=>this.props.onEnded())),this.player.bind(a,(e=>this.props.onError(e)))),this.player.load(e,{...this.props.config.options,callback:()=>{this.player.getDuration((e=>{this.duration=e/1e3,this.props.onReady()}))}})}))}play(){this.callPlayer("play")}pause(){this.callPlayer("pause")}stop(){}seekTo(e){let t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];this.callPlayer("seekTo",1e3*e),t||this.pause()}setVolume(e){this.callPlayer("setVolume",100*e)}getDuration(){return this.duration}getCurrentTime(){return this.currentTime}getSecondsLoaded(){return this.fractionLoaded*this.duration}render(){const{display:e}=this.props,t={width:"100%",height:"100%",display:e};return c.default.createElement("iframe",{ref:this.ref,src:`https://w.soundcloud.com/player/?url=${encodeURIComponent(this.props.url)}`,style:t,frameBorder:0,allow:"autoplay"})}}h(f,"displayName","SoundCloud"),h(f,"canPlay",m.canPlay.soundcloud),h(f,"loopOnEnded",!0)}}]);
//# sourceMappingURL=reactPlayerSoundCloud.7af93a3d.chunk.js.map