import React, { Component } from "react";
import { View, Text, StyleSheet, TextInput, Button, Image, ScrollView } from 'react-native';

class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      nome: 'NextLevelGames!!',
      entrada: ''
    };

    this.entradaNome = this.entradaNome.bind(this);
  }
  

  entradaNome() {
    if (this.state.entrada === '') {
      alert('Digite seu ID: ');
      return;
    }
    this.setState({ nome: 'Bem vindo ao NextLevelGames: ' + this.state.entrada });
  }

  render() {
    return (
      <ScrollView style={styles.container}>
        <TextInput
          style={styles.entrada}
          placeholder="Digite seu ID: "
          underlineColorAndroid="transparent"
          onChangeText={(texto) => this.setState({ entrada: texto })}
        />

        <Button
          title="Entrar" onPress={this.entradaNome} 
        />

        <Text style={styles.texto}>{this.state.nome}</Text>

      
        <View style={styles.imagensContainer}>
          <View style={styles.imagemBox}>
            <Image
              source={{ uri: 'https://static.wikitide.net/greatcharacterswiki/2/2f/Arthur_Morgan.jpg' }}
              style={styles.imagem}
            />
            <Text style={styles.imagemTexto}>Arthur Morgan é o personagem principal e grande protagonista de Red Dead Redemption 2. Arthur Morgan nasceu por volta de 1863, filho de Beatrice e Lyle Morgan, no norte dos Estados Unidos. Quando criança, sua mãe morreu de causas desconhecidas, enquanto seu pai era um pequeno criminoso e fora da lei. Em 1874, quando Arthur tinha 11 anos, seu pai foi preso por furto. Mais tarde, Morgan testemunhou sua morte e, apesar de um relacionamento tenso com ele, ainda colocou o chapéu e manteve uma foto dele. Por volta de 1877, Arthur foi encontrado como um 'delinquente selvagem' e apanhado nas ruas por Dutch van der Linde e Hosea Matthews. Vendo os dois como figuras paternas substitutas, Arthur passou a compartilhar a visão de Dutch de uma vida livre das restrições da civilização e do estado de direito.</Text>
          </View>

          <View style={styles.imagemBox}>
            <Image
              source={{ uri: 'https://reddeadredemption2.wiki.fextralife.com/file/Red-Dead-Redemption-2/rdr2_john2.jpg' }}
              style={styles.imagem}
            />
            <Text style={styles.imagemTexto}>John Marston nasceu em 19 de Setembro de 1873. O seu pai era um imigrante escocês analfabeto que nasceu no barco para Nova Iorque, enquanto a sua mãe era uma prostituta, que morreu durante o nascimento de John. John viveu inicialmente com o seu pai, um homem que amava a Escócia e falava sempre sobre ela. No entanto, foi cego numa luta de bar a sul de Chicago e morreu a dada altura, quando John tinha oito anos de idade. As circunstâncias em torno da sua morte são desconhecidas, embora John tenha sido informado de que morreu na luta de bar. John foi subsequentemente enviado para um orfanato, onde passou os anos seguintes. Acabou por fugir e tentou fazer a sua própria sorte a viver nas ruas. Aos 11 anos de idade, John cometeu o seu primeiro homicídio quando matou um homem, embora ele tenha afirmado que a culpa não era sua. Em 1885, aos 12 anos de idade, Marston tinha sido capturado ao falhar em um roubo contra proprietários em Illinois, que planejavam enforcá-lo. Dutch van der Linde interveio e salvou o jovem rapaz, levando-o sob a sua proteção; John foi assim introduzido na Gangue Van der Linde, ao lado de Hosea Matthews, Arthur Morgan, e Susan Grimshaw. O bando tornou-se uma família substituta do jovem rapaz, com Dutch tornando-se o seu mentor e figura paterna. </Text>
          </View>

          <View style={styles.imagemBox}>
            <Image
              source={{ uri: 'https://pm1.aminoapps.com/7180/a35ec99e578adf7b5d959018a3d1ce6c8fb9413fr1-736-980v2_00.jpg' }}
              style={styles.imagem}
            />
            <Text style={styles.imagemTexto}>Dutch nasceu em 1849, filho de uma mãe inglesa chamada Greta Van der Linde e um pai holandês em algum lugar perto da Filadélfia. Seu pai lutou pela União na Guerra Civil dos EUA e morreu na famosa batalha de Gettysburg.Por causa da morte de seu pai, Dutch desenvolveu um ódio profundo por sulistas.
Dutch não tinha uma boa relação com sua mãe, era desobediente, por isso saiu de casa aos quinze anos. Sua mãe viria a falecer em 1881, Dutch só descobriria uns anos depois com informações de um tio seu.
Dutch valorizava liberdade e independência acima de tudo, sonhando com uma sociedade anarquista futura. Para atingir seus desejos, ele recorreu a uma vida de crimes.
Após uns anos atuando como fora-da-lei, Dutch conhece Hosea Matthews numa fogueira na estrada para Chicago. Hosea tentou roubar sua comida mas logo depois percebeu que Dutch tinha feito o mesmo com ele.
Impressionados, eles riram, e então decidiram formar a Gangue Van der Linde.</Text>
          </View>

          <View style={styles.imagemBox}>
            <Image
              source={{ uri: 'https://www.stinsonleathers.com/wp-content/uploads/2024/05/red-dead-redemption-2-micah-bell-tailcoat-mens-247x296.jpg' }}
              style={styles.imagem}
            />
            <Text style={styles.imagemTexto}>Micah Bell III nasceu por volta de 1860, filho de Micah Bell Jr., um impiedoso fora-da-lei. Quando Micah tinha 17 anos em 1877, ele e seu pai estavam em fuga pelo brutal homicídio duplo de Roscoe e Jean Briggs, que foram enforcados pelas vigas com a garganta cortada. Pode-se supor que ele foi o parceiro no crime de seu pai durante toda a sua criação, embora as evidências sugiram que ele também tenha corrido com seu irmão, Amos , por um tempo.
            Em 1898, Micah conheceu o holandês van der Linde em um bar, onde ele salvou sua vida depois que um negócio de ouro deu errado. Micah foi aceito na gangue Van der Linde,embora, ao contrário dos outros, ele já era um fora-da-lei experiente antes de ingressar. Depois de cinco meses, ele olhou para uma balsa em Blackwater . O assalto deveria ser um grande placar, mas foi um desastre e a gangue foi forçada a fugir do calor para as montanhas de Ambarino.
            </Text>
          </View>

          <View style={styles.imagemBox}>
            <Image
              source={{ uri: 'https://www.newamericanjackets.com/wp-content/uploads/2019/04/Hosea-Matthews-Shearling-Coat.jpg' }}
              style={styles.imagem}
            />
            <Text style={styles.imagemTexto}>Hosea é o membro mais antigo da gangue, e o mais antigo amigo de Dutch. Inteligente e equilibrado, Hosea aconselha regularmente Dutch e é valorizado por sua sabedoria. Por mais que ele compartilhe ideais semelhantes. Ele parece ser muito mais pragmático em sua compreensão do que está reservado para a gangue.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20,
  },
  entrada: {
    borderWidth: 1,
    borderColor: 'red',
    margin: 12,
    fontSize: 18,
    height: 40,
    padding: 10,
    width: '80%',
  },
  texto: {
    textAlign: 'center',
    fontSize: 22,
    marginTop: 20,
  },
  imagensContainer: {
    marginTop: 30,
    width: '100%',
  },
  imagemBox: {
    alignItems: 'center',
    marginBottom: 20,
  },
  imagem: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  imagemTexto: {
    textAlign: 'center',
    fontSize: 16,
    width: '80%',
    marginBottom: 20,
  },
});

export default App;