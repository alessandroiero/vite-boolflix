<script>
import { store } from '../store';
export default {
    name: 'Footer',
    data() {
        return {
            store
        }
    }
}
</script>

<template>
    <div class="container-full">
        <footer>
            <div class="footer-colonne d-flex">
                <ul class="col-3">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Investor Relations</a></li>
                    <li><a href="#">Ways To Watch</a></li>
                    <li><a href="#">Corporate Information</a></li>
                    <li><a href="#">Netflix Originals</a></li>
                </ul>
                <ul class="col-3">
                    <li><a href="#">Help Center</a></li>
                    <li><a href="#">Jobs</a></li>
                    <li><a href="#">Terms Of Use</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <ul class="col-3">
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Redeem Gift Cards</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">Speed Test</a></li>
                </ul>
                <ul class="col-3">
                    <li><a href="#">Media Center</a></li>
                    <li><a href="#">Buy Gift Cards</a></li>
                    <li><a href="#">Cookie Preferences</a></li>
                    <li><a href="#">Legal Notices</a></li>
                </ul>
            </div>

        </footer>
    </div>
</template>



<style lang="scss" scoped>
.container-full {
    background-color: #000;

    footer {
        padding: 50px;
        max-width: 70%;
        margin: 1rem auto;
        overflow: auto;
        color: #999;

        a {
            color: #999;
            font-size: 0.9rem;
            text-decoration: none;
            &:hover{
                color: white;
            }
        }

        p {
            margin-bottom: 1.5rem;
        }

        li {
            line-height: 1.9;
        }
    }
}
</style>