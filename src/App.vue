<template>
    <div class="container" style="max-width: 800px;height: 848px;margin: 0 auto; border-style: groove; padding: 0">
        <header>Contacts</header>
        <button type="button" class="btn btn-primary but" data-bs-toggle="modal" data-bs-target="#modal1">
            <i class="bi bi-person-plus-fill" style="margin: 10px"></i>New
        </button>
        <create @create-contact="createCon"></create>
        <div style="margin-top: 150px">
            <div v-if="names.length == 0" style="text-align: center;"><h2>No Contacts !!</h2></div>
            <div v-else class="container contact" v-for="(i, idx) in names" :key="i.id">
                <a @click="detData(i)" data-bs-toggle="modal" data-bs-target="#modal3"><i class="bi bi-person-circle" style="color: grey; margin: 0 22px 0 7px;font-size: 65px"></i></a>{{i.name}}
                <a @click="delCon(idx)"><i class="bi bi-trash" style="float: right; color: red; margin: 12px; font-size: 40px"></i></a>
                <a @click="upData(i)" data-bs-toggle="modal" data-bs-target="#modal2"><i class="bi bi-pencil-square" style="float: right; color: lawngreen; margin: 12px; font-size: 40px"></i></a>
            </div>
        </div>
        <edit :id=update.id :name=update.name :phone=update.phone :mail=update.mail @update-contact="upCont"></edit>
        <detail :name=det.name :phone=det.phone :mail=det.mail></detail>
    </div>
</template>

<script>
    import Edit from './components/Edit.vue'

    export default {
        components: {Edit},
        data() {
            return {
                update: {},
                det: {},
                tempId: 1,
                names: [
                    {
                      id: 1,
                      name: 'Mudassir Ali',
                      phone: '9948453537',
                      mail: 'mdmudassirali09@gmail.com'
                    },
                    {
                      id: 2,
                      name: 'Sohail Ali',
                      phone: '8074061938',
                      mail: 'alisohail028@gmail.com'
                    }
                ]
            }
        },
        methods: {
            createCon(name, num, mail) {
                const newCon = {
                    id: this.tempId + 1,
                    name: name,
                    phone: num,
                    mail: mail
                }
                this.names.push(newCon);
                this.tempId++;
            },
            delCon(id) {
                this.names.splice(id, 1);
            },
            upData(i) {
                this.update = i
            },
            detData(i) {
                this.det = i
            },
            upCont(id, name, phone, mail) {
                const constId = this.names.find(i => i.id == id);
                constId.name = name;
                constId.phone = phone;
                constId.mail = mail;
            }
        }
    };
</script>

<style >
    header {
        background-color: #0d6efd;
        color: white;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 65px;
        width: 794px;
    }
    .contact {
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        font-size: 40px;
        width: 780px;
        flex:auto;
        border-radius: 10px;
        margin-bottom: 5px;
    }
    .but {
        float: right;
        font-size: 30px;
        margin-right: 30px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    }
</style>