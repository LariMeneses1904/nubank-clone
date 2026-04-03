import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { 
  UserRound, 
  Eye, 
  EyeOff,
  CircleQuestionMark, 
  ShieldCheck,
  ChevronRight,
  Atom,
  Barcode,
  ScanQrCode,
  Smartphone,
  CreditCard,
  EyeClosed,
} from 'lucide-react-native';

export default function App() {

  const [mostrarSaldo, setMostrarSaldo] = useState(true);

  return (
    <View style={styles.container}>

      <View style={styles.top}>
        <View style={styles.topLeft}>
          <UserRound style={styles.UserRound} size={30} color='white'/>
        </View>

        <View style={styles.topRight}>
          
          <TouchableOpacity onPress={() => setMostrarSaldo(!mostrarSaldo)}>
            {mostrarSaldo 
              ? <Eye size={30} color='white' />
              : <EyeClosed size={30} color='white' />
            }
          </TouchableOpacity>

          <CircleQuestionMark size={30} color='white' />
          <ShieldCheck size={30} color='white'/>
        </View>
      </View>

      <View style={styles.top2}>
        <Text style={styles.hello}>Olá, Ana</Text>
      </View>

      <View style={styles.saldo}>
        <View style={styles.saldoLeft}>
          <Text style={styles.saldoemcont}>Saldo em conta</Text>
          <Text style={styles.saldoValor}>
            {mostrarSaldo ? 'R$ 97,48' : '••••'}
          </Text>
        </View>
        <View style={styles.saldoRight}>
          <ChevronRight size={30} color='#585858ff'/>
        </View>
      </View>

      <View style={styles.transf}>
        <View style={styles.tranfI}><Atom size={30} color='black'/></View>
        <View style={styles.tranfI}><Barcode size={30} color='black'/></View>
        <View style={styles.tranfI}><ScanQrCode size={30} color='black'/></View>
        <View style={styles.tranfI}><Smartphone size={30} color='black'/></View>
      </View>

      <View style={styles.transfT}>
        <Text style={styles.tranftTex}> Área Pix e Transferir</Text> 
        <Text style={styles.tranfTex}>Pagar</Text>
        <Text style={styles.tranfTex}>Pagar com Pix QR code</Text> 
        <Text style={styles.tranfTex}>Recarga de celular</Text>
      </View>

      <View style={styles.cards}>
        <CreditCard size={24} color="black" />
        <Text style={styles.cardsText}>Meus cartões</Text>
      </View>

      <View style={styles.caixinhas}>
        <View>
          <Text style={styles.caixinhaTitle}>Total em caixinhas</Text>
          <Text style={styles.caixinhaValor}>
            {mostrarSaldo ? 'R$ 0,00' : '••••'}
          </Text>
        </View>

        <ChevronRight size={30} color='#585858ff'/>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems:"center"
  },

  top:{
    backgroundColor:'#8300d4',
    width:'100%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  topLeft: {
    width: '50%',
    height: 60,
    justifyContent: 'center',
    paddingLeft: 10,
  },

  UserRound: {
    width:25,
    height: 25,
    borderRadius: 100,
    backgroundColor: '#8b30d1',
    padding: 10,
  },

  topRight: {
    width: '50%',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  }, 

  top2:{
    backgroundColor: '#8300d4',
    width:"100%",
    height:100,
    justifyContent: 'flex-end',
    alignItems:"flex-start",
    padding: 15,
  }, 

  hello:{
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
  },

  saldo:{
    width: '100%',
    height: 100,
    backgroundColor: '#fff',
    flexDirection: 'row',
  },

  saldoLeft:{
    width: '70%',
    padding: 15,
  },

  saldoemcont:{
    fontSize: 20,
    fontWeight:'500',
  },

  saldoValor:{
    fontSize:20,
    fontWeight:'500',
  },

  saldoRight:{
    width: '30%',
    alignItems: 'flex-end',
    padding: 15,
  },

  transf:{
    width: "100%",
    height: 100,
    flexDirection:'row',
    justifyContent: "center",
    alignItems:"center",
    gap: 15,
  },

  tranfI:{
    width: 80,
    height: 80,
    backgroundColor: '#ebecf0',
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: "center"
  },

  transfT:{
    width: "100%",
    height: 50,
    flexDirection:'row',
    justifyContent: "center",
    alignItems:"center",
    gap: 25,
  },

  tranftTex:{
    fontSize: 12,
    textAlign: 'center'
  },
  
  cards: {
    width: '90%',
    height: 70,
    justifyContent: 'flex-start',
    alignItems: "center",
    marginTop: 15,
    paddingLeft: 15,
    flexDirection:'row',
    gap: 11,
    backgroundColor: '#ebecf0',
    borderRadius: 20,
  },

  cardsText: {
    fontSize: 18,
    fontWeight: '600'
  },

  caixinhas: {
    width: '100%',
    height: 100,
    padding: 15,
    borderTopWidth: 1,
    borderColor: '#eee',
    marginTop:8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  caixinhaTitle: {
    fontSize: 20,
    fontWeight: '600'
  },

  caixinhaValor: {
    marginTop: 5,
    fontSize: 20,
    fontWeight: '600'
  }
});