<template>
    <div>
        <MusicianCell v-for="(musician, index) in musicians" :key="index" :musician="musician" />
    </div>
</template>
    
<script>
import MusicianCell from './MusicianCell.vue'
export default {
    components: {
        MusicianCell
    },
    data() {
        return {
            musicians: [
                { name: "D.K.", age: "27", genre: "rave", listenersPerMonth: "414 314", imageUrl: "https://previews.dropbox.com/p/thumb/ACPEkfN_dRgkDAJoY9jQfeV-NtdcxbJ00oRjvGR4RiDELvx0eAP2_z9Nlpl_rsXUIF6MF-gOkv4Jhy7vCCLBQMlowD3BkeVuikg_6Nr_xUPCVOCAAxNgWsLwllel0RT369LTdmOoh22QR7y632r0LfeL8_cHMDVJwyw2c2Fz4Q7L2iTN_RAMjBoFWemaAFn0VJSuQ5Ko_GW_fZ1bl-CDVU9Xaw0Uh60zHdE1XRID612awglQrbjROlOhKqGfrx3F6piBF4rcAjAfKY8TKRMIXjm8GQhciNLRO7ensGcXIwL2yv6kIBxSU6mc8d_Z99-y3Bb2rk3zlfARcLb9SAKeQoj2/p.jpeg" },
            ]
        }
    }
}
</script>
    
<style scoped lang="less"></style>
