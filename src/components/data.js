const data = {
    cardData:[
        {
            id: 1,
            role: "Mage / Assasins",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte4a96c247eff02b3/5f76a07fed21e20f14408cc8/Ahri_ChampThumb.jpg",
            title: "Ahri",
            desc: "Ahri merupakan salah satu Champion Wild Rift yang menjadi favorit bagi banyak mid laner berkat skill set miliknya yang mudah untuk dipahami. Selain itu, ia juga punya burst damage tinggi, ditambah dengan crowd control berupa charm -- membuat lawan akan berjalan kepadanya tanpa sadar.",
            vid : "https://www.youtube.com/embed/qwyXMLwrtrE",
        },
        {
            id: 2,
            role: "Assasins",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltc0791818cd2f4d0c/5f9b3be22176ca2b14fe9ac5/akali_champthumb.jpg",
            title: "Akali",
            desc: "Akali adalah champion Assassin Wild Rift dengan skill yang bisa dibilang sangat serba guna. Banyak yang mencari Build Akali Wild Rift karena champion yang satu ini memiliki tingkat kesulitan yang lumayan tinggi.",
            vid: "https://www.youtube.com/embed/01jlCIyLitQ",
        },
        {
            id: 3,
            role: "Marksman / Assasins",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta90647208ec52bd3/61b1eeadf2c59775f0a563c9/Akshan_ChampThumb_v2.jpg",
            title: "Akhsan",
            desc: "Akshan adalah seorang penembak jitu (marksman). Melalui senjatanya Avengerang, Ia dapat memberikan damage kepada lawan saat dilemparkan ke lawan dan kembali ke tangan.",
            vid: "https://www.youtube.com/embed/q2W6i2XG12Y",
        },
        {
            id: 4,
            role: "Tank / Support",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1eaff769344bff40/5f7f704c90ca8a0f01e5bf3c/alistar_champthumb.jpg",
            title: "Alistar",
            desc: "Alistar adalah salah satu support tank yang bisa kamu mainkan selain Blitzcrank dan juga Malphite. Kekuatan Alistar sendiri terletak pada armor miliknya serta combo CC yang ia miliki. Champion ini seringkali menjadi inisiator di dalam teamfight karena dapat membuat kejutan yang tak diduga-duga.",
            vid: "https://www.youtube.com/embed/ocSxwKMW_Qw",
        },
        {
            id: 5,
            role: "Tank",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1a32c946abb79fa9/5f7f7066be9b6d0f29635455/amumu_champthumb.jpg",
            title: "Amumu",
            desc: "Amumu merupakan seorang Champion Tank jungle di dalam League of Legends: Wild Rift dengan tingkat kesulitan yang terbilang rendah.",
            vid: "https://www.youtube.com/embed/ajEzEuG1JTY",
        },
        {
            id: 6,
            role: "Mage / Support",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2a1ad314c284a597/5f7f70816e4e710f2401283b/annie_champthumb.jpg",
            title: "Annie",
            desc: "Annie adalah Champion Wild Rift dengan role mage-support yang dapat memanggil boneka beruang besar yang akan membantunya. Menentukan Build Annie Wild Rift merupakan salah satu faktor penting yang harus kalian perhatikan jika menggunakan champion ini.",
            vid: "https://www.youtube.com/embed/V1MTfvAl9qE"
        },
        {
            id: 7,
            role: "Marksman / Support",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt61bcbb832dcafe7e/5f7f709a6e4e710f24012849/ashe_champthumb.jpg",
            title: "Ashe",
            desc: "Pelajari kemampuan Ashe secara mendetail, item terbaik untuk dibuat, keterampilan mana yang harus diratakan terlebih dahulu, dan banyak lagi.",
            vid: "https://www.youtube.com/embed/NqbB8p_tS98"
        },
        {
            id: 8,
            role: "Mage",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blte1c6bf20190ea8bd/5f7f70b590a4e40f544d6fcd/aurelionsol_champthumb.jpg",
            title: "Aurelion Sol",
            desc: "Aurelion Sol, atau Star Forger, adalah champion perkasa dengan gaya bermain yang tidak menyerupai champion lainnya. Dia adalah Mage yang kuat dengan kemampuan untuk membelokkan bintang, terbang melalui medan, dan menembak musuh dengan komet dan benda langit lainnya (cukup banyak).",
            vid: "https://www.youtube.com/embed/A0TZVb-Kmxk",
        },
        {
            id: 9,
            role: "Tank / Support",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltee932ab68b12a5c8/5f7f70d2be9b6d0f2963546f/blitzcrank_champthumb.jpg",
            title: "Blitzcrank",
            desc: "Blitzcrank adalah salah satu Champion, sebutan untuk hero di LOL Wild Rift yang memiliki kemampuan hook dan tanky. Dengan kemampuannya, Blitzcrank akan bagus sebagai support di dalam game.",
            vid: "https://www.youtube.com/embed/FqsHCQ31PUw",
        },
        {
            id: 10,
            role: "Mage",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfe11cddac4528e6b/6132e9bd8e16ab655b34967b/Brand_ChampThumb.jpg",
            title: "Brand",
            desc: "Dia adalah seorang Champion yang biasa digunakan di mid atau support. Namun apapun posisinya, Brand memiliki berbagai ability yang cukup sakit ditambah dengan crowd control-nya.",
            vid: "https://www.youtube.com/embed/y_BLBgH3VbY",
        },
        {
            id: 11,
            role: "Tank / Support",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt63aea2bb5eed1e8b/5f7f70ee8becd30f135cba35/braum_champthumb.jpg",
            title: "Braum",
            desc: "Braum adalah champion Wild Rift dengan role tank dan support yang bisa kalian tempatkan pada posisi yang opsional.",
            vid: "https://www.youtube.com/embed/uR97BUcyqZw",
        },
        {
            id: 12,
            role: "Marksman",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt8a4656e68f388de4/61831d52c9714c667b4fe93c/Caitlyn_ChampThumb.jpg",
            title: "Caitlyn",
            desc: "Caitlyn adalah Champion Wild Rift yang hadir pada patch 2.5a bersama dengan Jayce. Dia adalah seorang Duo atau AD Carry yang memiliki jarak yang cukup jauh dan memiliki beberapa ability yang membuatnya berada di luar jangkauan musuh.",
            vid: "https://www.youtube.com/embed/muYLs3wXpG4",
        },
        {
            id: 13,
            role: "Fighter",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blta9142124480e018a/5f7f7109a11c740ee7364b69/camille_champthumb.jpg",
            title: "Camille",
            desc: "Camille adalah salah satu Champion Wild Rift yang tergolong kuat. Ia bisa digunakan dalam dua role, Baron lane dan jungler. Kemampuan utama dari Camille adalah mobilitas serta burst damage yang ia hasilkan.",
            vid: "https://www.youtube.com/embed/1Wx2ZwdX_Is",
        },
        {
            id: 14,
            role: "Marksman",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcf0aca4fcb7df2b9/6010a1d46e1217102724a62e/Corki_ChampThumb.jpg",
            title: "Corki",
            desc: "Corki merupakan salah satu champion di League of Legends: Wild Rift yang sangat mendominasi di midlane. Inti dari permaianan Corki adalah positioning tepat dan usahakan selalu melakukan cek bush agar terhindar dari sergapan musuh. Item yang wajib dibeli oleh Corki adalah Essence Reaver dan Mercury's Protobelt.",
            vid: "https://www.youtube.com/embed/C7Mjp0PzWiQ"
        },
        {
            id: 15,
            role: "Fighter",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt848cb576db580f29/601071460839e910126d75ad/Darius_ChampThumb.jpg",
            title: "Darius",
            desc: "Darius adalah salah satu champion Wild Rift yang masuk tier S, hal ini karena Darius sangat kuat dari early hingga late game. Dalam menggunakan Darius perlu memperhatikan stack pasifnya agar damage yang diberikan bisa semakin besar.",
            vid: "https://www.youtube.com/embed/3Fgq1ylnNxQ"
        },
        {
            id: 16,
            role: "Fighter / Mage",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltd0897a7752b37d94/6089da9df871471012bddad3/Diana_ChampThumb.jpg",
            title: "Diana",
            desc: "Diana merupakan Champion assassin-mage yang cocok dimainkan untuk pemain yang ingin menyerang musuh dan membunuhnya dengan cepat. Selain itu, Diana sangat cocok bagi pemain yang mengandalkan basic attack dan skill secara bersamaan.",
            vid: "https://www.youtube.com/embed/fhTzWAGeK1M"
        },
        {
            id: 17,
            role: "Fighter / Tank",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltfd593c46174adfea/61a69f70b03f7e139b6a3a1a/DrMundo-rework_ChampThumb.jpg",
            title: "DR.Mundo",
            desc: "Dr Mundo adalah salah satu tank yang bisa digunakan sebagai jungler karena mempunyai damage yang besar dan mempunyai durabilitas yang bagus. Champion satu ini memiliki kemampuan farming tercepat yang membuatnya kuat di semua tahap permainan.",
            vid: "https://www.youtube.com/embed/ntOMQ4mZz3I"
        },
        {
            id: 18,
            role: "Marksman",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/bltcee91c8dafb4d1b5/60108f1b94a1800f61b5095e/Draven_ChampThumb.jpg",
            title: "Draven",
            desc: "Draven memiliki senjata yang unik yaitu kapak yang dapat ia putar dan lemparkan untuk memberikan damage kepada musuh.",
            vid: "https://www.youtube.com/embed/cicrM2KIMbs"
        },
        {
            id: 19,
            role: "Assasins / Mage",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt2c207c2d84dd87a3/62743734941a2939d3d01093/Ekko_ChampThumb.jpg",
            title: "Ekko",
            desc: "Ekko adalah seorang Assassin-Mage. Dia menggunakan terutama item Ability Power dan merupakan Assassin burst-damage. Karena ceritanya, ia memiliki hubungan yang unik dengan waktu, dan itu tercermin dalam kemampuannya.",
            vid: "https://www.youtube.com/embed/YiYAGR06U2I"
        },
        {
            id: 20,
            role: "Assasins",
            image: "https://images.contentstack.io/v3/assets/blt370612131b6e0756/blt1800da0e01ae1896/5f9b3bf673c2ae7b2fc0cc10/evelynn_champthumb.jpg",
            title: "Evelynn",
            desc: "Evelynn adalah salah satu Jungler/Asassin terbaik di dalam LoL: Wild Rift. Sederet kemampuannya membuat Champion ini bisa bersinar dengan mudah. Para Jungler di League of Legends: Wild Rift punya tugas utama membunuh para monster serta mencuri kill setiap ada kesempatan gemilang.",
            vid: "https://www.youtube.com/embed/_DPiQbqYRY8"
        },
    ],
}

export default data