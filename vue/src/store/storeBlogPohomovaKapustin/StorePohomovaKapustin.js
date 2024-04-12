export default {
    namespaced: true,
    state: {
        albumData: [
            { id: 0, title: "WILD EA$T", artist: "SALUKI", imageUrl: "https://previews.dropbox.com/p/thumb/ACPBPt6dpWda0W-rdSjPYu_WfUtCIpZ1azugGM8ORnjwBdj3_E3Z4GGy0ZzRkbn7hiRIl8xVmI3NE7hzTMBDBrLjuzJeCjELEPoD9yILt0N5EksxUClNnEmUMuNZBJR1H5dHucE0CESvxw-Nx990LaCm__-EFtjojMGh2Sm06SDJz11wlOASQyyie8_XSs6BoO-ht8wdmYe7-cKOLjcP8vZK44m2ZAw8y0zyaWf7-aY_M0vz8TQxbpbfdyiNZrw7rvQTPKc1S1VDJ0maNezQXiyDzHHWcVp3kPOvCWeIBqTWQQZQ04ze8e5AHSk2pu7dFRY4m6D148g-i92Ea7MisH40/p.jpeg" },
            { id: 1, title: "Shinra Tensei", artist: "tsb, opt", imageUrl: "https://previews.dropbox.com/p/thumb/ACPZIH4-_yQEFPyZDK9--OGEnGg8R8j_XPLMzpXGMi7XW2W8HWqgS3o3qezO7-Y0lWWYjuUgiu-cYM5DIercN0K9LxCCAGNLATzMCYFhW-Cu_HrvbX95ku8kPWVteMrK0aCmg0MsAUFlofuxPcl5GxNpKHDYxR-9eQULF1LbcXzte_SA9BzN1ddLSogWs6J6z5rbjlNR7nvje5USOfE5zxWiMKd5HcBfNpDjwaiPQT1V00klruINNfoNB_zzxT9ns50xWKHX1PnWELZ0H_RG-NtB8sOlIrkWTuxo8ZmfjrgTDTfdRS1o23qeRA8N8nPT-DxWmRc8R1fMQX4zvUuwnNga/p.png" },
            { id: 2, title: "СХИК2", artist: "Кишлак", imageUrl: "https://previews.dropbox.com/p/thumb/ACPDlQWZv76RQGARnvd36Z64ijrvYtSK4g_gZGIbMXf_bxu6J-33YWwP6iDzeFyKpLAWQ7WnIoasJLNRB6lbHFsEbl90_PDhWYzQXxxX2VboutikjL_SEkOANzcITcgivzEzS-H46r4r95lEUS_MMKMw2GQyrcJzTZSNYo3LRC8PQqNfA8VfR18liFFEZcfu1vg9xUPPdzTfCTC12pJDUrTMtCcrNOqFIMHtAQuFkyIdgKzi3wblSNq4OF4-wOMsNxuN3aoiB7bInOBsDElEszWroeiXuUQE_75nMAKWFeflNTekshs5P_m9OaRFAICmDMa8pYDbpLrF-QjgmJe_f6mc/p.jpeg" },
            { id: 3, title: "Близнецы: Thanatos", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACOtFBVG6TtqA8l6gnslaZDZwMVv8zDUlKtjzLlatwHY6LgzM-T5URbL5uxXK-rTHt4IvvmrEI0n5EWZxs4IIudmeN4rb2jcvGoEND1oJf4dNqxRJH-gFGhOhCiA_CTQwIpswIlQd-bNnKvGE43_9sqSj9pe4z2eK-mwTNg1x506chFfy-2QSMxkdOuQgC3Ae6URrgXzZsOYGx_68x7B86P900hNSbPkDLPJbpO6yascxFTMy9X5uOAjmGtn68XOisTyITTOMHjbdlwrRKeiVnnBWtegKc0eERRHYq7RH0D0EWMiz7weumC43-oFeFCj0rL5dsjGAykl7WsPICmxvJDd/p.png" },
            { id: 4, title: "Близнецы: Eros", artist: "Джизус", imageUrl: "https://previews.dropbox.com/p/thumb/ACNYloSqlNFPqu3USXJGV9zm3q3KT_iGHY_qCVxy3f2estAAbvTELrpPdibxzyomT2hZEBsZMMlXHyfN9ueE54uHJBm7llGEQnF1wI40aZ0y-AvEU1AgCQEvoXA8lfB8wzlL_powHdRsnHU--WbwwqVwK31U73AzhIc6jyY34p3xe5BO2JV00BSbta-69NJlRvz6JCy6R3j5QmEkWTCaxK9aCqUYTn6leEiXLvky9esFnI3qlJkn0-toGjNcstkvLGgGQmtZzZgqSzz-pFZH7CfIjXoHoJ9ny3Savu42X1dRytqPs1aVustHftZDHSun9LEtqRcSOcxY0cmuIolOLNgE/p.jpeg" },
            { id: 5, title: "Cristoforo Colombo", artist: "FRIENDLY THUG 52 NGG", imageUrl: "https://previews.dropbox.com/p/thumb/ACOlsWiJ36jFetaO9EmDf2ggYeO5QBkTHy_6TzaBLKArkH6NaMwLoAuosV6V-u-biHJIXyNG3OZjS8B-XdApNyapzrjpw6k8RwxhoQSiqQa1Y3iQc7tAjPBZKmLIZbo_hmORSHPUr80sEvNb4-R-Wa-XxrK4vqfkhfysaDwgBQWFCHFM44riqmZl7fqmHj3ETlxSSmzKLzvw4jHyHgs-5ZRT0413gC0NIQHmoGzrpAURMFa5OvUlxbIItqDpw48V1JDEeAu-dC8J3MZYVRDghQc4_eAn75238qtzXnWftcFAV-HBUUneYCgKk8PYaeyk7PplFZl0n_UtT_H3vNiyIR59/p.jpeg" },
            { id: 6, title: "LONG LIVE 812", artist: "ALBLAK 52", imageUrl: "https://previews.dropbox.com/p/thumb/ACMyZ-LjV_m5alOOpvrgxH9wf8hMN1gsn9E9N9TVNuxfMfV6tMLExTTH3KwtYx_05JBO5UgWQM7XJLW-hZvPBwGBF09Y3tGjLog_LcgEGhN1gkuG7ZxSXnf94G2WzzmQo1BkgvD0RblnS74vJs3-qivG2stnKKeCJ407r3WgJBXFT6-ObHDmLIkSegIV1BWX_KpGrDgdIZrVgbM2vrCMo4X0UaBI4V7tPe4PVbSIJ4gMnwvjskThwRPHoeETqGBE38OcZ65f1LYB3sDVJqqlRDg3LKEIgP9O8kfvwwboDhvT_YZkG9UI1yDbm8rl0uHTYk7po1BymENQJbH_v_DXKLT1/p.png" },
            { id: 7, title: "AA LANGUAGE 2", artist: "Aarne", imageUrl: "https://previews.dropbox.com/p/thumb/ACMUuh0R4znBNtGNSdhuYmqu2B-4zBsNyAhEsUOhGRwnUClKowDJSJpnKpB8ElVETmdSCS6dPXmMDb0M6ovyQ9rh8StOPQ2BBtDMhbrqCTImGue6O3awiG0N8HDPyT18-6006RhQ9L0_OfhpeoO8A45mw3kG-JgW5plMeOjcKv20cBn18_hymuHA55eq7Ne852NaUucFoo3N-b_ax5_rf9g9l-U3OCXrLwHuv5_vT4DXhKi5Il5aFSz_Npwbd0QSkV_GIQWnaaqwY4NLzEAOjRN2Vj7E3Fkpeq1MtJa8yDmULnpjb-kCudyaHHXmEynsW7Y9Y_NMsOdCZrYZqXqA2_6x/p.jpeg" },
            { id: 8, title: "BROKEN SEASON", artist: "ANIKV", imageUrl: "https://previews.dropbox.com/p/thumb/ACOdC5wIJZcITnMrMJYCYwIH0vIa5EfpGy24XOjvCoHYX6L1MBirNHrJkJ6bviyeeY8ORfwHDsi-SBAtlLjhR6rFro64RuwKd6Jr6ZdJAhRlVwOrH_EkW4Q4ljoMyCclTNF6qrdLmU9WTRWHHWWAofWtZEF0r3ywfVlfDYRxV0ZbIo-Wzj50yImqyTuapBg-AVuLOQMPuMi2plJGFup_fNN1VB-XiqYM22u85n-46G4ci7GvzLKOHcbQ8mIonEZha4RABnPPqVnPeGNMAOhIKluCAhiojMEbBogIE6TBM8ah9afBK2qkLR3HSuSmvaAzcMXfdw7zlHNhlAKoo_QRGWQq/p.png" },
            { id: 9, title: "СЕРТОЛОВСКИЙ ТОКСИК", artist: "Boulevard Depo", imageUrl: "https://previews.dropbox.com/p/thumb/ACNZE9dIXxmEJN1c_nvNZCctzdFzIHr6oA8YE0LFqwjwQytFwSHPW_NEVSndpCBVroPNh7a3aud5KVGOSeIQzgEDcOR-ZhGYdfsgngmcNs45q7ynPZvksVJvjL9B-DxZEHDAK0VxcVgnetgvyPehdgms15ODVFl0_opyVKe5hxs0643xeL4JdIAbUMVmq3Ty5qLMtBHfPG9cetf8sHM1XV_wtd6DZU7yTFOesM1oUxXm6mrrGbozeh0HSj8XMx2nrZjHHptoKBLMLtk4bSLrQRkSNtowXMf_nwsdDxCOOIGoH8D7hzW_YLy1isnZcKwkCCUaWnnyYDos-r8Nq6ZkrNpL/p.jpeg" },
            { id: 10, title: "ИКОНА", artist: "прыгай киска", imageUrl: "https://previews.dropbox.com/p/thumb/ACOsujvO4hC_RzePtGiEQAug_bNk2LXUbMkW-FoPIpHDC84ZZC8pHscmWCA5ZlS3N7kMnZ1x-xxoYaSfeaoie_PuFA1hlAJw2GTLt191mLautgGrZBN2E9_iK6NAozeZL0gJWLY2l-AWU0kdF0Gdm1Ca1-Aiqvbx3M6OkepU6drwBNLID5Pa-btG2m1Z4Atr-05DmbA7F17ckay7qgYhQk8QzJZZHa5Y4xtFcGF89EdwysU9qHYov-NFVnRkntffLNRLcEkKPN5Htd4-b6y4HOMq6dpMOyE_F_N0uM1o0EUBp01_hnyge_SFqijrU6oYSSmrn_u-Ul1GRCJdkBapIvs0/p.jpeg" },
            { id: 11, title: "SHELBY IIII", artist: "i61", imageUrl: "https://previews.dropbox.com/p/thumb/ACNhWx-mBuEpENag0UlBlnBAnQia_eKYLh3yKPIpjrSfrvyLVSL1djszk1H-5emXn6Sag-Gm0dkq8X-ytC61t_iuS7tv207lL9l5t3qIPagzFqU7MCJchwhbwLlYv9corX7MkqY5Aa8zjOtrhBQeWEThL1IGZyNTMiM9lC3z6uJZqUfFFcGZg_s3uA63nx-rUhjEFty8K8F1mJYvsCogXziKcLhe40lREyJ8CxsBVNPiG8JzjCHxn_GOzg1VmuHXg30Wr6nwU3bQqqt4a_2yT8n5aydH6utJ4ssnJbAER5RCnYXNXrD0QOujfu8AWN1yV7IZ-RbPr72ZpZN4A15UL-Ez/p.png" },
            { id: 12, title: "Несчастные люди", artist: "ЛСП", imageUrl: "https://previews.dropbox.com/p/thumb/ACPyMD7NaYSWAQvW5J61lJ-vn83H1C6guGlnuI0i3N5deKJukoRIT4NQ5rlPOydEOCbg4ZPGiBmh9gesN2M_UAJuk6s6bV-ctiNtzNKSXJDj8XRphynZmBuIZcvdVl37xztJ1fvta9p6vs7ssh43lHzTXb969t2Y2ktPcIX67eaCxqjCZP7q1S7azpuRNYPyFtI8q-nmOHJ2cpO9aX8xfDFRBD3NYtuuibMnOFbdSsIT292Kd6D6CUiV32ZRk4Uftpq8XEYSQu021DjrcOpHqal2reHQC6cskoeIrEaAQ4gIHxi0Kf5ldTI7BvC1nygFZraTK887X0IERsmyfcQqiMWH/p.png" },
            { id: 13, title: "SKYWALKER", artist: "ROCKET", imageUrl: "https://previews.dropbox.com/p/thumb/ACOrWKV-MS2AbYeA37DWTcVpqI-2UEZAxgC44Q_ffrbqHuJcsy-Re2zkSk_8dJ-siRhzaJs5kmWF9IvpS1Pz7I7iRO86IYpGW__hOldI6tEwiAOT0VAt6kVgVXvsQnVp3LHnK17toOCrK-InDn_6ImiFW3jC1fODGHbhcxGq5L3IPhlaJ8l6r0ZMr8-1CfOIpOUgteOhdKyZffbLQw9GtyexC-Y50qYP7EzDmNIf3u_blZOuny8UYFuYWunHbmWaQ1bUv1TLD-BfA8eCsOOqvMVdJ0iII0pBtnXKCcXShO3msDYuqdZgm5JYkmnrm6Z77-KohhcS010khRI83hWggfxi/p.png" },
            { id: 14, title: "DREAMS MONEY CAN BUY", artist: "Heronwater", imageUrl: "https://previews.dropbox.com/p/thumb/ACPs6UIHHQrG4VgOuy2yrfSggSgFGJ6rBPEQ5m2usIGnZ88EsPth9NnCSSk_i4911U0I9W9-W0Iy9CuUXVROIESV5beyUWgOtxoTAvDM615JK9iWsMLrGiNC3MyQyoxLUHgV1c5W7kY5ydz1fv22y83ntUHAf5BJSJYJIQMhdRI3DNvdISwT1LbAho3mzedtWihBIlOmoRP6dS02f_quHPpcKK4J8LAKPRp8Xp0youHkGKuKpUXDzdyYepupKclfeQu6ebwEq6K-jFxBd5k3-yJXrTmFMToCSQZem-orbU4lZeT8uHLSbpNXWco4M6OP2xXWzX_m0cLQg_TWqz2ISOeh/p.png" },
            { id: 15, title: "HEAVY METAL", artist: "Kai Angel, 9mice", imageUrl: "https://previews.dropbox.com/p/thumb/ACP_jkTRUNEnMPfrhNpWhIC3_Tx2rP5NXGhV6Vcdi9wBRRF-TZmSefIZTGtuul3Dmk-gB5rf17vx9o1ID13wjjsK_abqtsauuTJYHZjs45furX7Zpp_i2dbX-yYTNOo-lrrVzZf5OFC92nW1fes9LGHhGXBwWLpHDya3OAZyEOyjSkci1tIZl4nbVoxJc4PSHPkBKpDDGKCL1IrQQggafyYcnQmgym03n2CQXgPe6Ev4FU_4tLwtUw_wfQ-kEf-vPH6XXmIxuX8dCXrG8dvSI2ddj1vSaS_14pLQfSUoz7eMO2q1Q6EwzAtySOBMV3sYHQz-2b-4KDbOYlEUZCq5yWQ_/p.png" },
            { id: 16, title: "Платина", artist: "Платина", imageUrl: "https://previews.dropbox.com/p/thumb/ACMvdcvjRHM-er5mQCnTAVxWQfOjxzRxwH7mg2J9e_pAR31VyUBv1mxNIyHx-Zrs65Um7SCVqZR43nd7uyrzNircFeGjU3c3rwcxzl_1a1FvG6aufLgaVlsXMrJgHz1IIwcNsOqQXeyRZUoKQYhFOPvAW87dTnUt45p-_QLqgiIuzoi3HIS53FrKsPAqgcyb1akK-P8m9lVY8vKmKrjKW4XuFVRk8sQP-YEvI_t4TwY5ZaQ8NNJqKzXe3131YHVrITR1zCZZ59kajnKR-G9PcLcInjTufe8XjokFlVOm_wcoe4zEcsgBOe0xRSGXIlNV0vON-1CKq2C6a5ZydswwnXma/p.png" },
            { id: 17, title: "Злачное Место", artist: "BOOKER", imageUrl: "https://previews.dropbox.com/p/thumb/ACNeW9ZdW9FpbEeewe4SJk6_l351IiJqqKgQjcZYjqj7_l7B8xfDEwAk7DMLuYestorJXKnbwRCRfYP4pPSoepE1fK37ThQmpNvJ2HYeTXQCMD9fAWaqqJ1kEZqPrOuVVHF3Mtzjusd4Zh-69K1EwPfs4LvhWFZwe80OVwc5cvTSDLUolELt7tD62CmVCfxPeLX1Lrugp1y3UfEoD6zCpZE7eLr1chTrqTWHswZo-Hc-xViyNh91TOGfnKR2SJKvoFdclDKWqZ5tIGuFiWaSjxK0DER3pODrtE40-jBUK-rvj30ZUDWbAJJqrPhSqk1CX-iIzBKF0kwhygit9_6G71B1/p.png" },
            { id: 18, title: "HOTSHOT", artist: "Toxi$", imageUrl: "https://previews.dropbox.com/p/thumb/ACN3JEOm4_gLpbObstK4B-B21zVWa0EhZwhCaqEj1cG3mNnOWzymnrrrgkkbTnlaFlanKa1P2ATULP2-XxzlOIDmHQlN8kZG2wN4oI5cWLKkdxHd4YewEaOLEfolMY2nwWmyMRd9i76DRY3lv1V9rVhzNDGSG1oT4RfHUYh1U6NZDioJH4tOMldVM0Ebhf83BJWdNsrkMGW1tg1qn5-BqMLZEHCFl4T79r90pxopT3aNFBbtA84EEe9uUHTnFQE4v8UKSuhorf7vHSwfxhNqmGyz-Z8vSZK_vYAzJjY0K8I2zLTqFbf9MsDwlF8j9Y9lYwCBUvc8ChJVS8VM5ai-vpaS/p.png" }
        ],
        musicianData: [
            {
                id: 0,
                name: "D.K.",
                age: "27",
                genre: "rave",
                listenersPerMonth: "414 314",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPrF3SJGolcXh27UgDJQv5Gfqv8V8k4uMAyA2D8UpdoUpKebhwOuhs_LB0A3rf1wQe249RhGmLPza-WPLWaBq7dtQiCXIHfd6RM-uoZxd5bCyFLIhmzkD4KAhBSQOmyqh2_ezspM2zudv-4w9FI0Imb4E-ymIFBny2039gJ1C96d9yWXY9hzJv61iSpacNn2ebWohvmmm7948sEaQ8IRM_-tG1TaD7AlSubQ_qfvyZ63Q-sLOs8ir4jjuo7k2HpukUCKo3JBb2yFgNiWC6aQTDL_Vrl0HrGOl41yxgOmfEM0VgmlnZpOPV3lNC_dl2wH5R7z8n8QvrVEtodKJyYN0H-/p.jpeg",
                description: "Данила Владимирович Кашин (родился 6 ноября 1996 года в Казани) — рэпер, EDM-продюсер, а также видеоблогер из Санкт-Петербурга. На просторах площадки YouTube он прежде всего известен своими клипами и пародиями на чужие работы. В своих треках и клипах он неоднократно делал фиты и коллаборации с другими популярными личностями."
            },
            {
                id: 1,
                name: "Boulevard Depo",
                age: "32", genre: "rap",
                listenersPerMonth: "1 604 753",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPoErkHaxeLGAMnagpfzDz_ay38kSsdV5MrXXaHWYpRZ4cgVaG7K7KiC7kX_xT_KLv-i1V-aBJDNAWJTrOzttUkfWSXLdgqk8Td8-Os8a3PQHAdugkOjg7V5qj5mXwuz_SLzarabGWpdalxLXOOYoUuHN8tlqoHOcyX-MFmqkEaOfn-3pFsw9RvkEOn-0fchTty_s_pYsX09OuprB_BiVZlryMDlbrrfZwsw2obKyI2LhaARHLeA5BpKFlUr1vEuT7a06ndkmx7XoUldoWT0Uo_6nOBcMOFW5nCYB7CyTxBFCD9zLunsKbqs5tlD54X2cWhBZbJd2EoUfp_zY1MmxHj/p.jpeg",
                description: "Артём Сергеевич Кулик (родился 1 июня 1991 года в Уфе) — российский хип-хоп-исполнитель, художник и основатель коалиции YUNGRUSSIA. \nВ 2009 году, ненадолго отложив увлечение граффити на второй план, Артём выпускает Place of Distribution. EvilTwin, вышедший в 2012 году, закрепляет у него любовь к музыке. Первый толчок к популярности Депо даст альбом Dopey 2013 года, после которого он всё больше и больше рос как полноценный артист. \nНовый этап в карьере Артёма начинается вместе с выходом релизов Rapp в 2014 году и OTRICALA в 2015. В это же время Бульвар основывает коалицию YUNGRUSSIA, коллектив которой, как покажет время, совершит настоящую революцию в музыкальной индустрии, а всё благодаря необычному стилю и самобытности артистов, входящих в него. \nИменно в составе Молодой России рэпер выпустил все свои совместные релизы, а именно: Paywall и Плакшери совместно с Фараоном и Rare Gods, Vol. 1 и Rare Gods, Vol. 2 совместно с i61."
            },
            {
                id: 2,
                name: "Джизус",
                age: "26",
                genre: "rock",
                listenersPerMonth: "708 069",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPz7zlMJd9u3xBXj8GmmGmORNOJ1lavt1MdomhvS3yXmPGgXAVSf9DyCUbzgCmnM37Vd-aZ9JFOlM3eWlizcGB9A_NXDTWe8QROKWbotN3y4Dol04nR9Wy913zCkHTFVPmHVomwmjQR7b60QIo4hG2HSfZzv93M-cvvWBixILtkJEAHt3kxxaQZhD2t1qEGcYh-MO4nS3EgNL55-4XyQbuoFFrf4L7TZ2diJ0OPZworaoCP_cDwa0ASc8EuKaqZUEgLlvoUDpo7OyMxVsX8a1aRKfpwAYzfnHQifFCOT6wCKOplR0gcPEYCHyRxuzu3aaQFoTLOH8ha2w74CMCkliqr/p.jpeg",
                description: 'Кожихов Владислав Дмитриевич (родился 12 июня 1997) — рок-исполнитель из Кирова, один из основателей и участник творческой команды «КОННЕКТ». \nС конца 2019 года проект «Джизус» был командой из самого Влада и его лайв-бэнда, однако 1 июля 2021 года Владислав сообщил, что дальше он будет двигаться один. Участникам группы не удалось найти общий язык. \nСвою карьеру Владислав начал под псевдонимом VLΛD БЕΛЫЙ в 2016 году, выпуская различные синглы и акустические релизы. 9 ноября 2017-го он выпустил дебютный альбом ВОЗРОЖДЕНИЕ под псевдонимом JESUS. \nПосле выхода из психиатрической больницы в октябре 2018-го Джизус презентовал знаковый для своего творчества релиз ПСИХО-НЕВРОЛОГИЧЕСКИЕ ЗАБОЛЕВАНИЯ С ВИДИМОСТЬЮ НЕВИДИМЫХ СУЩЕСТВ, после которого музыка артиста пошла в большие массы.'
            },
            {
                id: 3,
                name: "Кишлак",
                age: "25",
                genre: "rap",
                listenersPerMonth: "977 873",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACMExU9uJjyB5crgen4yt8j1D_54gpACVQQLsGw6FS6SVq0wwnbZMpU5JGu4htBjrKYl-mL7EJpe37uQ1tuQbqSE4WsMpO_P3oj6JLl8AEqVeSvNPC2UhjY8VUGUZmfj6qwmDxXV_tZD3S1HgAoyVnEYche6MDncZLYL2CtbLrmzBd6Q1g2-k7FSup9IuoF8L6rcdNEe4HoNZVwVKol2HLCsZ-RXyf_mm2MU3xZ8n3mC7p74e7Pm-MvGUAl1BIrnhOSl2SmrGuXNK-Yfcv24RqBnUwmdIceWR6QPcZhN5UNFrXLOFLYSRVhjJm2dXga2buor0uMNDaKQhSHLRJ-uu_k2Oi4Q0LBiYiOOupw99O2xzg/p.jpeg",
                description: 'Фисенко Максим Сергеевич (родился 14 декабря, 1998 г.), более известный как Кишлак — основатель ранее существующего проекта Автостопом по фазе сна из Североморска, Мурманская область. \nПроект Автостопом по фазе сна был закрыт, просуществовав чуть больше года. После закрытия АПФС Максим сменил свой псевдоним на Кишлак. В 2021 году Макс переехал жить в Москву и стал усердно работать над новыми проектами.'
            },
            {
                id: 4,
                name: "Saluki",
                age: "26",
                genre: "hip-hop",
                listenersPerMonth: "2 269 649",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACOyV-lLCwsm9o0LPdJcT6LT6veY1QWa5SZV-20tVz4P1xnWE4dfzHejSqdWcQJ_cPbjgljPAfX1Tgi_fpst-vNLnKw5ta9AuSbjFT79pwoBlbbQ-H__CReEPdW-Cn40mU79Vuzxwl4qz3OxMh5russpTY1d7HGZyBbu8gA_BY_wfnn6yKfEN0VWJ6N_AzIhX9HemYQVsN9NOKQPU1i0IamhtNOVZEKFUthGxK6rDPaTAaYsa-gjv3NRAy1EtvXr-mVgv_DLL5smInglB92UfE0K-fqhBQUnpf3Z3nX2fvAryxh5tdhQt2WhOS2kAE0panEhnmjYv3cJlu_oUd3SC4OK/p.jpeg",
                description: 'Арсений Александрович Несатый (родился 5 июля 1997 года в Москве) — российский рэп-исполнитель и битмейкер, бывший участник музыкального объединения Dead Dynasty.'
            },
            {
                id: 5,
                name: "TSB X OPT",
                age: "???",
                genre: "drill",
                listenersPerMonth: "263 622",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACORNy48goSiarrE-g2PcgdoKv1oWdFf1eiTt3v4FXuM-cseHixnvfILXSUZBY3ivhDm1_snVGv3ifgdNqxHsMs-Pew4cWaWd67nf3b0_PCpN3GdDCHfENs6s28JlhTmIjcg1KGZb5Z1-tcbOXtE1BKN3yZegbhGwnM44J-PnrXtkfU66rBh3_o6HFLsQUR826mY604SV4Hflvlw7zTAyc6WuiZ2v3HpMwaj8h9fDhpa0ppbqM9thcM89mDsEaI1htXAGFPGzOHJ224RgUpMhJl4gwm7_kUvG3W0xaRzsRX6taouULgTEYC0vTAGIIPDeocN9C3ilcksNRqkFTVfEFZj/p.jpeg",
                description: 'Два Волжских парня, поднимающие русский drill с колен, за счет сильной экспрессии, как в вокале, так и на бите.'
            },
            {
                id: 6,
                name: "FRIENDLY THUG 52 NGG",
                age: "23",
                genre: "rap",
                listenersPerMonth: "1 427 323",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPASM2cuIiAlk-1JUE32cWGjEV6KfTqPR9H9lEhwCdSRGqoVTSGQdvY4eymxQeeF1mvJ8hhZ-UEAjHvIWqFVkZ6JHb1VYPAjuZRvFdHIDlHEBfEBRG9GlJSKNKPs43D3Eh2Hr-iNnHB4LtImrjfVCEnvlnHuMJsHM2JmoLQ3O57uya55ZwvJLrGKpHTAUloIpoPomBCc-sgxcNROTvctQ9OHZ7bUfyzYaFmVYj60Cf7nG2o4wNf1fMvB621mOMQtQ0LzqSKohXzzPVvr_hQbUiiwBJahzXqtSgyCKmWy_6a5O9czFhABf6y7aC14f7LxaIA8GwAJhAD9lKEkDwJpfajwJ--Kbqae0_6Z56UILfX5g/p.jpeg",
                description: 'Александр Дмитриевич Романов (родился 28 мая) — российский рэпер из Санкт-Петербурга, получивший первую популярность в 2022 году. Является участником команды 52. В сети крайне мало информации о биографии артиста — это говорит, что столь быстрый успех он получил благодаря только музыке.'
            },
            {
                id: 7,
                name: "Alblak 52",
                age: "24",
                genre: "rap",
                listenersPerMonth: "1 816 111",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACMziB__LU4g6uWqDwBWpy40zWRAataXhcthfZ0gHOHT7vaAYd14GzBHv0D13E8VoCFl2fyKnEfA-6OF4RqeBmGxFenWWJRsAYB1CG-pRNvH33VsY2FP2OI8SdvurMwcHQoOIKZ4CySKA0usAOdDZRqqOm8HzMaSypGJ0lJMm3LmIGKACJZjxYkRoNmuGUWEBi6T_FHu9D3KHS8T5Uy-hHQfe9LrWE3Vxm057gDH4I7_Y7NRO5QJSXEsaHUkYW5SAsr2O8nzuE-cBWiVxDYWz1fVxuE0vSxRoyh0Y7fozHkz6v_vYJK9J_u1_SX_IGMOHabSVDBncLDHTAfrEXiN-XqX/p.jpeg",
                description: 'ALBLAK 52 (Каджаия Кирилл Зурабович родился 30 июня 1999 года в Омске, Россия) — российский рэпер и продюсер из Санкт-Петербурга, начал заниматься музыкой в 2018 году, получил первую популярность в 2022 году. Является участником команды 52.'
            },
            {
                id: 8,
                name: "Aarne",
                age: "23",
                genre: "rap / UK garage",
                listenersPerMonth: "2 749 751",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACP9yjWF1oz7G2VfsaZei5QE8IeVVgfznFST3l-rys_94XMqtbAIokjQt8Kpv4eY43yzEnqfVSYvij-OjG2L3aH-7okPEqhNE-onE_8Ot72nEDIpXEI0sLJ3RdjySvXjtyMCyCtb6pZ9dQsyAGEvRUNuY6pRUztEcBUlFdLMSEx7kgRHc_UZxgLWhKgfQrI78vn0H92YRXGZ0FanyQv63W23X44uC_FORHUCMGAsbOEbG-4202f85OIYZfeBKhX6cmYfOqIAkEdXMy_MCJoQ6D6KL2nV3sPn9S_vnEXY6B3Qz4CpJJwRPuYqMawUVf7bHuyy7vWxC0nkkEakcdNtRL79/p.jpeg",
                description: 'Aarne (Мирча Папушой, родился 25 марта 2001 года в Румынии) — мультиплатиновый продюсер и исполнитель, проживающий в Лондоне. Наиболее известен совместными песнями с kizaru, Big Baby Tape, lil krystalll, Платиной и OBLADAET. \nСобрав довольно внушительное портфолио и поучаствовав в создании немалого количества популярных песен, Аарни начал работу над своим продюсерским релизом AA LANGUAGE, выход которого состоялся в 2022 году.'
            },
            {
                id: 9,
                name: "ANIKV",
                age: "28",
                genre: "pop",
                listenersPerMonth: "2 481 745",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACNCMyfy_eZ-TvMVhbr9AVKiDKSzWOm1lXHgnI63tWIqR9yLzBOcRuzLu-e-gV134TvlCIrANZBok0Ut52Q21LU8D5LwRQdc_0pUEpKXAvY06xhD6VUbNnsYt8855tT_p-lqBwI5d4rzy8Wk9bpZ_10NnC0Tuh6qB-hzBdEXZ2IUpi6iWQRJliRwVm59oK8CSg0FGbyDIh-YEr01J06CH0l3sPni2ZCn8qd3ko1f-SJ3NxJx7XQrSWk5fO5b7SRVCrEdOKHs-5sY7jaGy9vaUUuOcDLJHuz0qYMP4Kpua9x8rIX6IMtjfz8wPagT-z0fnqcqRM3DnnMjWz7Yw-F6VCFN/p.png",
                description: 'Анна Онанова (род. 29 апр. 1995 года) или Анна Пурцен, более известная как ANIKV — соул-певица из Тбилиси, участница 2-го сезона «Песни на ТНТ». Известна совместными работами с рэп-артистом SALUKI. В 2019 году выпустила два сингла на лейбле Gazgolder: «Ярко» и «Женщина плачет».'
            },
            {
                id: 10,
                name: "Петар Мартич",
                age: "30",
                genre: "rock / hip-hop",
                listenersPerMonth: "134 402",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACNDVVYrbIdzm-lnmSem5PJIWC21qrWGhxU653_vyp14YJVSvMYzdS4T9SPOH3W8M7xymU6-OoZc-ku-u75S1Hurh1rpRLfTbj6fTbQohGGsY62gGCbOpyd6IQzegAXRpPCDvpUnt_K21Tz9vx8wpMBMvmcg9XAZx6zZ_GG9tX3mWgvWvokbHiDFtdA9hhnXwTA4GXDhffaN_ibnQSYvY9xqDGEBpa0gpBU3ZJJdW6eTqSsePrnXZQqOicVj2lbeFOOk4AougXJKnyyQ0zjXmdt9alMdWP1rzYOvzNaWe7DwmVeeyiPY8RrNFUsR0KHd8hhNYOuAYGE2l5-cqpFYI0HG/p.jpeg",
                description: 'Петар Мартич — певец и музыкант, автор треков в жанрах инди-рока, рэпа и шансона. В своем творчестве он высмеивает стереотипы поп-музыки и верит, что искусство способно изменить мир. Учавствовал в проектах: "прыгай, киска", "Пасош", "Озера".'
            },
            {
                id: 11,
                name: "i61",
                age: "29",
                genre: "???",
                listenersPerMonth: "354 804",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACO8vk4phEHz9YTVEtPPRs_gnNRWauUBzK5Al6Y8jrjUxe-CyQAGtaOEWafy9JgUsizrsZR6oK21O4qU17OG2DdnW3FycKrFlhknJGTlF_B8u9cKOGQeCAxG5UT8aVImFtTWTQ8KQhp4eGlvK_w3hZWZqqHuD0uNxHGQ-1d84BC6gvLEsx3EpRImTYMXeUrfcFgVSE2hwrMBbtwHM6O6WlscqHUzpBpky6SIlezeoANrwNcBcaV0LDlwGb-WQDGIZ8zIhyThtpwTIoN-6_tOZPwyv3NUqFN5dcJpaCaSJ9OMOJl8dFXTvfwq90XwMzu32e-gGBXonOrpE5DFYyaVXLNq/p.jpeg",
                description: 'Фёдор Юрьевич Оралов (родился 18 апреля 1994 года в Уфе) — российский хип-хоп-исполнитель, продюсер, звукорежиссёр, художник и основатель объединения DOPECLVBWORLD. \nК артисту нужно не просто прислушиваться, нужно искать детали в каждом словосочетании — ведь порой то, что хочет донести до слушателя рэпер, очень необычно и крайне запутанно. Часто формы выражения исполнителя достигает апогея в количестве жести в куплете, причем речь иногда совершенно не о матерщине. Не зря многие считают i61 самым сумасшедшим из рэперов за присущее ему поведение. Тем не менее, именно это и притягивает. Также, конечно, тяжело не подчеркнуть нетипичный голос и манеру подачи — в сумме у шестьдесят первого получается свой, совершенно необычный и психологически неординарный стиль + уникальная подача + часто совершенно нереальная смысловая нагрузка. Некоторое время являлся участником группы LSquad, взяв псевдоним Ignore. Уфимское рэп-комьюнити помогло ему адаптироваться к жанру. Даже в тот период качество его песен было на высоте.'
            },
            {
                id: 12,
                name: "ЛСП",
                age: "34",
                genre: "electropop",
                listenersPerMonth: "2 821 600",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPTvnKOCAsRoCJU1C5zn4yf4wxgpaxtqQoZYXAdAKAimRJz-f-gwsBPsq4U3QgvnFabqdNa00ZkPPd9NX119U5CpxNoqJ0AejtmPfo_QdrmLhZQTyVzxtde0E-NH5QPfJu4AFbbO81m4WrY_O2pVT3ODkA-HUqaSwMLvPGOW9BIl4y8Qd34g73HkHAdmhTqGYI1XOeCXNiu_rezZuRmHwuydOs78b3Q_iuU_bTjcd3dpoyeml_npwuYCOA4F3oWEAaOUyA0iE5IOlu7cZ8XoKPhxw4D665FmcIjbJ7u7oLRi-e8pyTQiwtr12k2cS0_2ZFO_BmglgisnCtysQs-GSaO/p.jpeg",
                description: 'ЛСП (Савченко Олег Вадимович, родился 10 июля 1989 года) — белорусский рэп-исполнитель. До 2018 года — группа, состоящая из Олега Савченко и Романа «Англичанина» Сащеко.'
            },
            {
                id: 13,
                name: "ROCKET",
                age: "26",
                genre: "rap",
                listenersPerMonth: "977 986",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACPGklvkMfPKFvOEbuTMoAqQAGAabaAMe2faKwq1GMuA-jn-JrF2WV7-mNjN_cFIb1XCFvH9SDrXu7zi9E8eLwI8eM8SYlMjW2b-ZmcwgnM-Qy2lx-1S6oSHVWrajv11ANzp7AwZZWE8zQ3fb-IL3e2wCImh8Pq2GUNK8mzbyg42rzOSgAG6ZzEMilYaH8yTRjKgfokKUFGzG64IcNrWRvUVpAwni5tALeWMqx2-3IoNHAosrj0fQ8S0eMM6MtrYnQzUDSHBV2QK5vo4jnGwjaBW5571xjRHoBZ67mjXpKFNBaxSAHm4Yl5KJtLlBsn8WGuZ_G8tC0DlBNJcujJipP-p/p.jpeg",
                description: 'Дмитрий Владимирович Королёв (родился 12 октября 1997 года в Москве, Россия) — рэп-исполнитель. Первый раз выстрелил треком, а позже и клипом на песню «Sangria, Don Simon».'
            },
            {
                id: 14,
                name: "Heronwater",
                age: "21",
                genre: "rap",
                listenersPerMonth: "1 255 146",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACNAadNXi0aynvH6BTa7JGosjmHghz6nzDNz3YkSfkh9ogz8lMZi3S5JDscROdbX2Bu14TVL6T2e6SM25ZITzOyi3bzNfHJH9AXI7wY6dfP7gNqk3nXozPzjixEDmpB3ZqFw08P319LJproxpItWKqmUQbJc165b1OCzAM7lXa5HyfBtv6iQKQIwASSPGKYYCFZTdOboDNnvzTt-ZRU4rDZvolvYofKHnTFX1sih7QXZHIjUItcWfHuTK1ZhtlZ96E1-oJ64dM0pH6CFoepq92p8YzjmW0oqylzjdwH-B8-peEElWKcNRlvnh0ZWYfLo3z_VW7QAAoIhfjcrJTc-R49TEa1bQQ3n2yn_8i-MATV_BQ/p.jpeg",
                description: 'Heronwater (Груздев Арсений Александрович, родился 17 октября 2002 года) — трэп-исполнитель, продюсер и звукорежиссёр родом из Костромы. Начал карьеру в 2017 году. Первую известность как исполнитель получил после выпущенного 3 июня 2022 года релиза 2 DAYS NO LEAN.'
            },
            {
                id: 15,
                name: "Kai Angel",
                age: "27",
                genre: "opium",
                listenersPerMonth: "379 951",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACOmp8uQLbZYkPqg5By_t5ssjVG6-A9LvvuqBZfCNH_vSV-s0b386utmuMTtygdqxNMk_1vpiEKzs73EWNnV_aLFYUtVu6lYJ-LPahITV_Z8BWX3NEbmNVrgCPPo24DWSmRjPq595_BHvimIYs9B_lc8I7dWEQYyq-9fa1zsehB6eCUSwfkI206fqG6uPqo5y75jL-UJWOx5ItT4qgR9yAO0iS-3HKDJb3r7g6W3HRwBuZ-BrVc4Q28h1fTiLwYCsbK9_voT7Cae6iS-HEEdSiT-9GI1I3OxRn8ZWGPEytEmHUGk9-SeFWgMUr3s2uM2MnZRJgXh_PHhv2fiz3vHsVhJ/p.jpeg",
                description: 'Дмитрий Олегович Ицков (родился 4 февраля 1997 года в г. Брянске) — русскоязычный рэп-исполнитель, битмейкер, звукорежиссёр и участник творческого дуэта VIPERR. Раньше выпускал музыку под ником zavet. Стал известен благодаря самобытному звучанию, ломанной ритмике исполнения и необычному инструменталу.'
            },
            {
                id: 16,
                name: "9mice",
                age: "23",
                genre: "opium",
                listenersPerMonth: "397 641",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACP9ib_MzKerlPOZf00H-9BNpemc2b2sCCz_OZIh5-unhX3cE73QsbEz_eHAQjSaMDeLehBaVMvOcW0il4Y_gW2zc14sfkoHfkaRb-so9oVI6SRElViVoB8bFV-yuVVTF-5tmgh0F-9dK6oSQHW5pZ7JP9YE4F_-lMurFRHi-PVG7iSL7DmxPkmL8hELH9rsMTPGahtaIhlTYBh6TKlViiBaOUZcuLHLmh1uVLRNCvTGaH5vw9eEE_Anwm_aQWnpKLQsMjpSpcbc2fJOoC2Yh3K6lkemP1P3kfnb_sRYq8_jkYeHiweIXLNpvH3rzKUYoF1f0xYUFkLs4NZtKvoFJTr3/p.jpeg",
                description: 'Дмитриев Сергей Игоревич (родился 27 августа 2000 года во Владивостоке) — российский исполнитель, продюсер, креативный директор и участник творческого дуэта VIPERR.'
            },
            {
                id: 17,
                name: "Платина",
                age: "28",
                genre: "goblin rap",
                listenersPerMonth: "1 357 339",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACOGtfa7-zc2IXd3f_0tsBUHCoU9ikL-dABjXTjPMzlhmIJIYOe9mMCqsKBUKNKgsAjhJp6x8LZuLSyhst34sKEEQ33vgkFDPmZt7kmARDvTL2o_Y0dyWz8-AzeV-flxmEywv-I6CKD53azQEKebf6BwdhICe2s1iSljFYh8gh1O3bNfwYUu1GUYhx1dAXprQZPDLHTiYz0QE2irF7E7N-2QgS8EkO3UV42TmI2BmfQ9S7i7MZtsNF4Mq545pkWFqwr-7Qa8SUYBVntK9uwI9M1UyFkvJ5dLK_Gjae_fLtxriDpOqMCWny92XGrLHyOGiPXKKoFF7aifZ7Qe6bPjKw7M/p.jpeg",
                description: 'Роберт Плаудис (родился 19 апреля 1995 года) — русскоязычный рэп-исполнитель проживающий в Риге, Латвия. \nТворческую деятельность начинал под псевдонимом «притистрит». Наиболее известен своими работами с OBLADAET и FEDUKом, а также с OG Buda, с которым выпустил совместный альбом. В 2018 году выпустил альбом «РНБ КЛУБ».'
            },
            {
                id: 18,
                name: "Booker",
                age: "30",
                genre: "rap",
                listenersPerMonth: "483 118",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACO9csb3jFOLhwLTAOs1708lsDyWoffKpejY74ymgtQ9v9fWlKw5EkmFPqI5GDiep8GNpslAy2m-t6gVfQRuqxkoxCl26hYJ1rEBTvCssE7XCTWZ4Fo6ZKSBH9b8Q4wIP85LaFi15e0mBrHXmdt3fL5S4bYuPJTxcBIquSqOxC8bXvt5qzaWOFQtuqkWO9peXjfTry4tbKrviutLhsvZxjjlZnF17_7PzddCcjzF6-L0tpWUOjuaNxiQJ08hQLZCZvcdd9IfDkzuyVYJKsY6o7uEu9tOx4OCX5XxSeWsVYMSRmVZBInPwJCa9U--PvJJHltDiEkAM0Xij6jX7wuKjG3p/p.jpeg",
                description: 'Booker (Федор Игнатьев, родился 8 июля 1995 года) — российский музыкант родом из Санкт-Петербурга, баттл-рэпер, финалист 2 сезона VERSUS: FRESH BLOOD, бывший участник объединения АНТИХАЙП, стример и просто панк.'
            },
            {
                id: 19,
                name: "Toxi$",
                age: "20",
                genre: "rap",
                listenersPerMonth: "3 109 945",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACMC1wmz7LyKLPomnpLEodOnR4UKvq7sgcCfm84xx1iWqM1aY1jSmLIwRyGHpEcXknMU2-Wra9AxkJ_7u65DUu-8Nj1v8_0Janbqpdn4y6YD9SWdKCEVrmsFUh6cHrLbOhntwRMSSrNOgTAj9KIjKyXNL8kOywhdrxR4jktlWRFULPeqQp20k1jEFc_-_Q5j7vhEYp4pVOfUhGLZX_EJRPI8LENJi9a_RUIJt26bTtiRZKYbswtDX4diIfMUpEjpiYjspg4g5lbxNPgxsqjK4EetzMXPNZT4oIBgKQGV-FZ_VDgnwAY4pqFz5waQrzf45QOuaUt8YYT1R0UENYpLuSey/p.jpeg",
                description: 'Андрей Леонидович Смелянский (родился 21 марта 2004 года) — трэп-исполнитель родом из Москвы. Участник объединения RANDOM CREW. \nКарьеру начал в 2019 году. Изначально делал песни исключительно на английском языке. Серьёзно начал набирать популярность 22 апреля 2023 года после публикации кружка в своём телеграм-канале, где он имитирует своим голосом мелодию из трека FENDIGLOCKа — «Допинг». \nПервый крупный проект после обретения широкой популярности — EP JAZZ DO IT — вышел 7 июля 2023 года.'
            },
            {
                id: 20,
                name: "Молодой Платон",
                age: "19",
                genre: "rap",
                listenersPerMonth: "2 891 854",
                imageUrl: "https://previews.dropbox.com/p/thumb/ACO0GS4mQ_7fXfOFmOpDJIOLP8pBqBTs10Li6cZQcps1MosuHxuKaLFruEfRL7dyDNzFdhP7xoBSTwl8_0ImxGNC60JAc_nDGbVkhxkBrEVx0HhUNQDrhCVRA1Ai6s31vdvs6Q5tHrwA2SQ89UVJ6euEjxXg6QXVpN2Z5THR6-dPFyAyyrP0SjX00EibWW4o676txwn1sW4HcomUIK67ekmYmoRK0zNCKUjcoYyu37YTgoQ3iJ7eab_yltfrHSB9UL2dBD7L9vGBLOt3HJOSfj44T9VXvhrT7qvcteEAhrhZJG2sHdiTLexH2YdqI9olqvSyNiQ1LZtX_2pUPS3zv7Qz/p.jpeg",
                description: 'Платон Викторович Степашин (родился 24 ноября 2004 года) — российский трэп-исполнитель из Москвы, бывший участник объединения RNDM CREW. \nНа данный момент живёт в Куркино. Большую популярность получил благодаря респекту от популярных артистов и дебютного альбома ЦУМ.'
            },
        ]
    },
    getters: {
        getAlbums: state => state.albumData,
        getMusicianById: state => indexId => state.musicianData[indexId],
        getFilteredMusicians: state => searchKeyword => state.musicianData.filter(musician => musician.name.toLowerCase().includes(searchKeyword.toLowerCase())),
        getLastIndex: state => state.musicianData.length
    },
    mutations: {
        addMusician(state, musician) {
            state.musicianData.push(musician);
            state.musicianData = [...state.musicianData];
        }
    },
    actions: {
        addMusician: ({ commit }, musician) => {
            commit('addMusician', musician)
        }
    }
}