const { Vonage } = require('@vonage/server-sdk')
 
const vonage = new Vonage(  
    {
        apiKey: 'c6778658',
        apiSecret: 'MVWXs8OtOeBcu4Xr',
        applicationId: '67872e00-d98f-4706-ba1c-2e1304abcf2f',  
        privateKey: './private.key'
        // privateKey: `MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCqLY8GTu1mCpYH
        // ei24+FoyKXYOaz/e7PzDWEvTfdzPCSdAqmxx5E1Rd8JIUBd3TUCXuHkZXm7unv2+
        // I7QynU4ClKlPWFqgZaZzAW4UYl1s9kHaLeNei/sUvJTleX/AGRDKDLB/3bWpND+Z
        // CdvzQYfb9a3oIHxOQEOgqwKUiJwNMbW14cMwLPIb7aq8NV08CXxpS3zH2I80i45/
        // OHuNHTo74Leq3Ezl3Wda3iTSftO5OpRN8Tn+oYt/ntx2bNE19j/tPT6KIvKMgsM/
        // ISHtr4sssjnObFJXapUB7cE5FHYDQDK00pxWKRzRMWGMhxfuFf03I0NgKJk4LSQe
        // gIg63RxLAgMBAAECggEADQC5Jmq+cecKKp0XxEPZpG6NkjF4qmBiOczT0l+SERGq
        // eaLr8VHX5IspgZv5BwkUj+MtAZa5FCt6yN3yhVGGpeTVAPaHyiyqKKxpzE3txIcW
        // ZgTOlClO8HkuSVBcxgFESqPokoSOvlR7LYbW0wHlTxW5CXz98n6vjCW050N+5PUQ
        // 55v4TrHoBxwogCsg3sIUSxM8J240AwN46ylDNt2FcGIhOID02//uMamBdGzWecDU
        // CxlZaLFHKvhwEsePpr3GyWpm8tl+hZMCV66TJ7DOy2hM/980ISvpC9tsI5uoz2aA
        // yBm/7eBrklCszmjLSy+6O/YW0j3BlNKEWlso4p0xwQKBgQDhPN+jmyreXuG4WSg7
        // XoAFb1mbsmLsrGJ0ITCxONEXsnn0uZfiaG02AECUxsyHCraHKRCXZn4Bx0UXhZn/
        // lJadE4Ff2LMNxZM84ZnCD2uoQdG/HA7LQfYrSAduAXaaOFSeiNZaVHkLLCpu3DUE
        // vtlcEeKwDJttEVZr3urAHjpBQQKBgQDBa5hG3KWBx9L9YyWeTioKW2JqXfWtGnNj
        // fgzH/yO01Lpk19mTQ1jr+ZK+fqhpiUHHxf+DYaG+Nggsm5GJtb/6AYYRzbYRJgyK
        // pmI94hnwwsqT5EbhRY9K767bQTz1YHcpZT3smUAjF1oRfHn3X9qhUJaaAbL2L+Hu
        // rPZ4FwIuiwKBgDD18I853Zm0+k/+YXZ2VlHYIJxtrH9SAZzI0jLT7O+/xi7iYRfA
        // J21DpMYyaKc6Nu8uiALBLsboMCaqzgz2mb7PTKIvEsz9k8H6MFg0zewnUpa+XKDm
        // V8KUx7ir7MIdWJeVmzLLhfxdv2OVzpiXe9w9rw8hzm9pA2YzcMgOSg+BAoGACQHl
        // uYcU/hI8NSik29ZwBsNytdliU4ljzkJUfgvXsdgmRgP3UfBU98hLmSt01FVcBt2l
        // pIyrZ5xEjS9Be9RG+HGRuMqHrAzFkL9m29LnulqX7IM4+cyve6Hl1rgXCqZPZlIc
        // rCQG5Jt1ylKtq2N/XvvNx6ZEm0pnjyHm6HjJ1TkCgYEAim63GMPDYAQk+piNSZfs
        // R6AFbkRlkJt9b7H7kLMKGIKwbyy8NCfh8Ed/X5QgIqQK9sOmcKHpwJAzvLeufv2j
        // cM7eRuAuyNyrzHbMbXb9lRloyoewmMU8QNQcutiEnDnWeJiyel13LyHN0qBy6qKg
        // o3YG4Ax5F4YyuzlkmQSVIos`
    }
)
const fullname = 'Paciente: Jhamil Huaman';
const servicio = 'Especialidad: MEDICINA GENERAL';
const fecha = 'Fecha: 11/02/2023';
const hora = 'Hora: 08:00 am';
const consultorio = 'Consultorio: MEDICINA GENERAL 12';
const medico = 'Doctor: DOCTOR TAL FDASGAS';
const celular = '51971042356';
// const celular = '51958899251';

const texto = 'Estimado ' + fullname + ' le recordamos su cita' + servicio + ', ' + fecha + ', ' + hora + ', ' + consultorio + ' y con' + medico + 'Por favor venir con su SIS, DNI y fdsafas. Aviso: Si no fsadgasdgasdgdassdagasdg. EL CARMEN - Recordatorio';
const text = texto.toString();

const from = "Vonage APIs"
const to = "51971042356"
// const text = 'A text message sent using the Vonage SMS API'

async function sendSMS() {
    await vonage.sms.send({to, from, text})
        .then(resp => { console.log('Message sent successfully'); console.log(resp); })
        .catch(err => { console.log('There was an error sending the messages.'); console.error(err); });
}

sendSMS();