import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from "../../providers/movie/movie"

/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {
  public objeto_feed = {
    titulo: "Paulo Henrique",
    data: "5, Fevereiro, 2018",
    feed_img:"../../assets/imgs/back.png",
    descricao: "Estamos criando um app em ionic",
    qtd_likes: "20",
    qtd_coments: "2",
    time_coment: "10hrs atrás"
  }
  public lista_filmes = new Array<any>();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private movieProvider :MovieProvider
    ){

  }

  public somaDoisNumeros(num1:number,num2:number):void{

  	alert(num1 + num2);
  }

  ionViewDidLoad() {
    this.movieProvider.getLatestMovies().subscribe(
      data=>{
        this.lista_filmes = data.results;
        console.log(data);
      }, error=>{
        console.log(error);
      }
    )
  }

}
