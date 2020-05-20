import React,{useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Button, Avatar, Hidden } from '@material-ui/core';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-scroll';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import topImg from './assets/topImg.jpg';
import aP from './assets/aP.jpg';
import a4 from './assets/a4.png';
import a5 from './assets/a5.png';
import a6 from './assets/a6.png';
import katsu from './assets/katsu.png';
import taiga from './assets/taiga.png';
import todai from './assets/todai.jpg';
import table from './assets/table.jpg';
import aap from './assets/aap.jpg';
import s1 from './assets/s1.jpg';
import s2 from './assets/s2.jpg';
import s3 from './assets/s3.jpg';

const useStyles = makeStyles(theme => ({
  toolbar: theme.mixins.toolbar,
  hTitle:{
    color:'#29CEB6',
    fontSize:'36px',
    [theme.breakpoints.down('xs')]: {
      fontSize:'24px',
    }
  },
  hText:{
    color:'#29CEB6',
    fontSize:'18px',
    [theme.breakpoints.down('xs')]: {
      fontSize:'16px',
    }
  },
  menuRoot:{
    width: '240px',
    height: '100%',
    backgroundColor: '#FFFFFF',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  topRoot:{
    width:"100%",
    height:'100vh',
    backgroundImage:`url(${topImg})`,
    backgroundSize:'cover',
  },
  topBody:{
    width:'100%',
    height:'100%',
    background: 'linear-gradient(to bottom, rgba(41,206,182,0.7), #ffffff)',
    display:'flex',
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
  },
  title:{
    fontSize:'48px',
    fontWeight:900,
    margin:'0.7em 0',
    [theme.breakpoints.down('xs')]: {
      fontSize:'24px',
      margin:'1em 0',
    }
  },
  subTitle:{
    fontSize:'28px',
    fontWeight:900,
    margin:'0.7em 0',
    [theme.breakpoints.down('xs')]: {
      fontSize:'18px',
      margin:'1em 0',
    }
  },
  dTitle:{
    fontSize:'24px',
    margin:'0.5em 0',
    [theme.breakpoints.down('xs')]: {
      fontSize:'18px',
    }
  },
  dText:{
    fontSize:"18px",
    [theme.breakpoints.down('xs')]: {
      fontSize:'16px',
    }
  },
  sectionRoot:{
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    [theme.breakpoints.up('sm')]: {
      width:'1280px',
      margin:'60px 0',
    },
    [theme.breakpoints.down('xs')]: {
      width:'360px',
      margin:'40px 0',
    }
  },
  button:{
    borderRadius:"40px",
    [theme.breakpoints.up('sm')]: {
      padding:"0 24px",
      margin:"48px 0",
      width:"300px",
    },
    [theme.breakpoints.down('xs')]: {
      width:"200px",
      margin:"24px 0",
    }
  },
  img:{
    width:"600px",
    marginTop:"60px",
    [theme.breakpoints.down('xs')]: {
      width:"300px",
      margin:"30px 0"
    }
  },
  acRoot:{
    width:"100%",
    display:"flex",
    [theme.breakpoints.up('sm')]: {
      justifyContent:"space-around",
      margin:"40px 0 0 0",
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection:"column",
      alignItems:"center"
    }
  },
  aCard:{
    width:'360px',
    height:'640px',
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    [theme.breakpoints.down('xs')]: {
      width:"300px",
      height:"auto",
      margin:"40px 0"
    }
  },
  aCImg:{
    width:'256px',
    height:'256px',
    margin:'40px 0 20px 0',
    [theme.breakpoints.down('xs')]: {
      width:'180px',
      height:'180px',
    }
  },
  sRoot:{
    width:'600px',
    border:'solid',
    borderColor:'#29CEB6',
    padding:'0 60px',
    margin:'60px 0 30px 0',
    position:'relative',
    [theme.breakpoints.down('xs')]: {
      width:'240px',
      padding:'0 30px',
      margin:'60px 0 30px 0',
    }
  },
  sAvater:{
    width:'60px',
    height:'60px',
    backgroundColor:'#29CEB6',
    color:'#FFFFFF',
    position:'absolute',
    left:'-30px',
    top:'-30px',
    [theme.breakpoints.down('xs')]: {
      width:'48px',
      height:'48px',
      left:'-24px',
      top:'-24px',  
    }
  },
  mCard:{
    display:'flex',
    [theme.breakpoints.up('sm')]: {
      padding:'60px',
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection:"column" ,
      alignItems:"center",
      width:"300px",
      margin:"30px 0 15px 0"
    }
  },
  mImg:{
    width:"256px",
    height:"256px",
    [theme.breakpoints.down('xs')]: {
      width:"180px",
      height:"180px",
    }
  },
  mDesc:{
    [theme.breakpoints.up('sm')]: {
      margin:"20px 0 20px 40px",
      width:"600px",
    },
    [theme.breakpoints.down('xs')]: {
      display:"flex",
      flexDirection:"column" ,
      alignItems:"center",
    }
  },
  pcRoot:{
    display:"flex",
    [theme.breakpoints.up('sm')]: {
      width:"100%",
      justifyContent:"space-around",
    },
    [theme.breakpoints.down('xs')]: {
      flexDirection:"column" ,
      alignItems:"center",
    }
  },
  pCard:{
    width:'360px',
    display:"flex",
    alignItems:"center",
    [theme.breakpoints.up('sm')]: {
      flexDirection:"column",
    },
    [theme.breakpoints.down('xs')]: {
      width:'330px',
      margin:"30px 0"
    }
  },
  pcTop:{
    backgroundColor:"#FFFFFF",
    width:"300px",
    height:"200px",
    display:"flex",
    flexDirection:"column",
    justifyContent:"center",
    alignItems:"center",
    margin:"15px",
    [theme.breakpoints.down('xs')]: {
      width:"120px",
      height:"120px",
      margin:'5px'
    }
  },
  pcDesc:{
    display:"flex",
    flexGrow:1,
    flexDirection:"column",
    margin:"30px",
    [theme.breakpoints.down('xs')]: {
      width:"180px",
      margin:'10px'
    }
  },
  sArea:{
    display:"flex",
    width:"100%"
  },
}));

function App() {
  const c = useStyles();
  const [menu, setMenu] = useState(false);

  return (
    <>
      <AppBar style={{backgroundColor:'#ffffff'}}>
        <Toolbar>
          <Typography className={c.hTitle}>Anytime Study</Typography>
          <div style={{flexGrow:1}}/>
          <Hidden smDown>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="about" containerId="overFlowScrollArea">
              <Button><Typography className={c.hText}>About</Typography></Button>
            </Link>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="members" containerId="overFlowScrollArea">
              <Button><Typography className={c.hText}>Members</Typography></Button>
            </Link>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="contact" containerId="overFlowScrollArea">
              <Button><Typography className={c.hText}>Contact</Typography></Button>
            </Link>
          </Hidden>
          <Hidden mdUp>
            <IconButton style={{color:"#29CEB6", right:'-16px'}} onClick={()=>{setMenu(true)}}>
              <MenuIcon/>
            </IconButton>
          </Hidden>
        </Toolbar>
      </AppBar>
      <Drawer anchor="right" open={menu} onClose={()=>{setMenu(false)}}>
        <div className={c.menuRoot}>
          <div className={c.drawerHeader}>
            <IconButton style={{color:"#29CEB6"}} onClick={()=>{setMenu(false)}}>
              <ChevronRightIcon/>
            </IconButton>
          </div>
          <List>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="about" containerId="overFlowScrollArea">
              <ListItem button onClick={()=>{setMenu(false)}}>
                <ListItemText>
                  <Typography className={c.hText}>エニスタとは</Typography>
                </ListItemText>
              </ListItem>
            </Link>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="members" containerId="overFlowScrollArea">
              <ListItem button onClick={()=>{setMenu(false)}}>
                <ListItemText>
                  <Typography className={c.hText}>メンバー</Typography>
                </ListItemText>
              </ListItem>
            </Link>
            <Link smooth={true} offset={-80} delay={200} duration={800} to="contact" containerId="overFlowScrollArea">
              <ListItem button onClick={()=>{setMenu(false)}}>
                <ListItemText>
                  <Typography className={c.hText}>お申し込み</Typography>
                </ListItemText>
              </ListItem>
            </Link>
          </List>
        </div>
      </Drawer>
      <div style={{overflow:'scroll',width:'100vw',height:'100vh'}} id="overFlowScrollArea">
        <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
          <div className={c.topRoot}>
            <div className={c.topBody}>
              <Typography align="center" className={c.title}>オンライン自習室で<Hidden smUp><br/></Hidden>コロナを追い風に</Typography>
              <Typography className={c.subTitle} style={{background:"linear-gradient(transparent 60%, #ffff66 60%)"}}>東大生の徹底サポートを1時間54円～</Typography>
              <Typography className={c.dText} style={{marginTop:"2em"}}>5/14まで特別無料！</Typography>
              <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfsIHV0H_G8s3O2bn-USNwDmTLYryVxXntQzfsfqK2v1bpevg/viewform" target="_blank" rel="noopener noreferrer" variant="contained" style={{backgroundColor:"#FFFFFF"}} className={c.button}>
                <Typography style={{color:"#29CEB6"}} className={c.dTitle}>
                  まずは無料体験
                </Typography>
              </Button>
            </div>
          </div>
          <div name="about" className={c.sectionRoot}>
            <Typography className={c.title}>エニスタとは？</Typography>
            <Typography align="center" className={c.subTitle} style={{
              width:"90%"
            }}>
              エニスタとはWeb会議アプリを使ったオンライン自習サービス。<br/>
              自宅に”人の目”を作り出すことで、心地よい集中を実現できます。<br/>
              用意するのはスマホひとつだけ。<br/>
              自宅にいながら、東大生に質問/相談が毎日できるので、学習効率/クオリティーのアップが期待できます。
            </Typography>
            <img src={aP} className={c.img}/>
          </div>
          <div className={c.sectionRoot}>
            <Typography align="center" className={c.title}>なぜ今<Hidden smUp><br/></Hidden>オンライン自習室なのか？</Typography>
            <Typography align="center" className={c.subTitle}>
              <span style={{background:"linear-gradient(transparent 70%, #29CEB6 60%)"}}>
                今この状況を追い風に変えられるかどうかで受験は決まる。
              </span>
            </Typography>
            <Typography align="center" className={c.dTitle} style={{
              width:"90%"
            }}>
              私たちはそう確信しています。<br/>
              <br/>
              コロナ禍で学校や塾に行けない。オンライン授業があっても、一方通行で質問がしづらい。<br/>
              家でもスマホや漫画などの誘惑についつい気が散ってしまう。<br/>
              <strong>親御さんとしては不安が尽きないものです。</strong><br/>
              <br/>
              <strong>しかし、ピンチはチャンスとも言えます。</strong>今の状況は皆に平等です。<br/>
              前を向き今できることを着実にやるか、言い訳をして流れに身を任せてしまうか。<br/>
              一年後の結果は大きく変わるでしょう。<br/>
              <br/>
              部活が忙しくスタートが遅れてしまった、学校行事に熱中するあまり勉強に身が入らなかった。<br/>
              今となっては、そんなハンデは一切関係ありません。<br/>
              <br/>
              <span style={{background:"linear-gradient(transparent 70%, #29CEB6 60%)"}}>
                我々エニスタはこの状況下で<strong>もっとも重要な２点に特化した</strong>サービスを提供します。<br/>
                今を追い風にするサポートをさせてください。
              </span>
            </Typography>
            <img src={aap} className={c.img}/>
          </div>
          <div className={c.sectionRoot}>
            <Typography className={c.title}>エニスタの３つの特徴</Typography>
            <Typography align="center" className={c.subTitle}>お子様の自宅学習を<Hidden smUp><br/></Hidden>エニスタが徹底サポート！</Typography>
            <div className={c.acRoot}>
              <div className={c.aCard}>
                <Typography align="center" className={c.dTitle}>集中環境を<br/>自宅でも</Typography>
                <img src={a4} className={c.aCImg}/>
                <Typography className={c.dText}>
                  ・みんなが集中しているところが見えると自分も頑張れる<br/>
                  ・メンターの目で学習にメリハリを<br/>
                  ・スマホはエニスタ専用
                </Typography>
              </div>
              <div className={c.aCard}>
                <Typography align="center" className={c.dTitle}>いつでもどこでも<br/>質問可能</Typography>
                <img src={a5} className={c.aCImg}/>
                <Typography className={c.dText}>
                  ・自習中は東大生メンターに質問し放題<br/>
                  ・専用のチャットでどんな時間でも質問できる<br/>
                  ・東大生メンターと近い距離感で質問しやすい
                </Typography>
              </div>
              <div className={c.aCard}>
                <Typography align="center" className={c.dTitle}>合格から逆算した<br/>勉強計画相談</Typography>
                <img src={a6} className={c.aCImg}/>
                <Typography className={c.dText}>
                  ・目標に向けたロードマップ作成を東大生が徹底サポート<br/>
                  ・経験に基づく効率的な勉強法を伝授
                </Typography>
              </div>
            </div>
          </div>
          <div className={c.sectionRoot}>
            <Typography className={c.title}>実際のエニスタ利用の流れ</Typography>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>1</Typography>
              </Avatar>
              <Typography className={c.dTitle}>専用チャットから<Hidden smUp><br/></Hidden>その日の自習室にログイン</Typography>
            </div>
            <img src={s1} className={c.img} style={{
              width:"auto",height:"360px"
            }}/>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>2</Typography>
              </Avatar>
              <Typography className={c.dTitle}>集中して勉強</Typography>
            </div>
            <img src={s2} className={c.img}/>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>3</Typography>
              </Avatar>
              <Typography className={c.dTitle}>質問には東大生が随時回答</Typography>
            </div>
            <img src={s3} className={c.img}/>
            <Typography align="center" className={c.subTitle} style={{marginTop:'3em',width:'90%'}}>
              充実した2時間で<Hidden smUp><br/></Hidden>メリハリのついた勉強習慣が身に付く
            </Typography>
          </div>
          <div className={c.sectionRoot}>
            <Typography className={c.title}>他サービスとの比較</Typography>
            <Typography　align="center" className={c.subTitle}>今求められている機能に特化した、<Hidden smUp><br/></Hidden>高品質かつ低価格なサービス</Typography>
            <Hidden xsDown>
              <table border="1" style={{borderCollapse:"collapse",margin:"60px 0"}}>
                <thead>
                  <tr>
                    <th align="center" style={{padding:"10px"}}></th>
                    <th align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>Anytime Study</th>
                    <th align="center" style={{padding:"10px"}}>学習塾のオンライン授業</th>
                    <th align="center" style={{padding:"10px"}}>家庭教師</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td align="center" style={{padding:"10px"}}>月額料金</td>
                    <td align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>
                      9,800円
                    </td>
                    <td align="center" style={{padding:"10px"}}>20,000円程度</td>
                    <td align="center" style={{padding:"10px"}}>東大生の場合30,000円以上</td>
                  </tr>
                  <tr>
                    <td align="center" style={{padding:"10px"}}>集中できる環境</td>
                    <td align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>
                      毎日最大6時間
                    </td>
                    <td align="center" style={{padding:"10px"}}>授業中のみ</td>
                    <td align="center" style={{padding:"10px"}}>週一回2時間程度</td>
                  </tr>
                  <tr>
                    <td align="center" style={{padding:"10px"}}>質問環境</td>
                    <td align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>
                      〇
                    </td>
                    <td align="center" style={{padding:"10px"}}>×</td>
                    <td align="center" style={{padding:"10px"}}>〇</td>
                  </tr>
                  <tr>
                    <td align="center" style={{padding:"10px"}}>学習計画立案</td>
                    <td align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>
                      〇
                    </td>
                    <td align="center" style={{padding:"10px"}}>×</td>
                    <td align="center" style={{padding:"10px"}}>教師による</td>
                  </tr>
                  <tr>
                    <td align="center" style={{padding:"10px"}}>講師の質</td>
                    <td align="center" style={{padding:"10px 20px",backgroundColor:"rgba(34,230,145,0.4)"}}>
                      東大生を中心とした優秀な学生
                    </td>
                    <td align="center" style={{padding:"10px"}}>学習塾による</td>
                    <td align="center" style={{padding:"10px"}}>教師による</td>
                  </tr>
                </tbody>
              </table>
            </Hidden>
            <Hidden smUp>
              <img src={table} className={c.img}/>
            </Hidden>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfsIHV0H_G8s3O2bn-USNwDmTLYryVxXntQzfsfqK2v1bpevg/viewform" target="_blank" rel="noopener noreferrer" variant="contained" style={{backgroundColor:"#29CEB6"}} className={c.button}>
              <Typography style={{color:"#FFFFFF"}} className={c.dTitle}>まずは無料体験</Typography>
            </Button>
          </div>
          <div name="members" className={c.sectionRoot}>
            <Typography className={c.title}>運営メンバー</Typography>
            <Typography align="center" className={c.subTitle}>中学1年生の頃から<Hidden smUp><br/></Hidden>互いに切磋琢磨しあった同期2人で運営</Typography>
            <div className={c.mCard}>
              <img src={katsu} className={c.mImg}/>
              <div className={c.mDesc}>
                <Typography className={c.dTitle}>川勝 壮馬</Typography>
                <Typography style={{margin:"20px"}} className={c.dText}>ハワイ州ホノルル生まれ神奈川県逗子市育ち。私立開成中学/高校卒業後、東京大学文科一類（法学部）に進学。在学中大手進学塾での講師経験3年・家庭教師経験2年あり。卒業後、ベンチャー企業にて営業責任者として大手企業・自治体とのアライアンス業務に従事。</Typography>
              </div>
            </div>
            <div className={c.mCard}>
              <img src={taiga} className={c.mImg}/>
              <div className={c.mDesc}>
                <Typography className={c.dTitle}>加藤 大雅</Typography>
                <Typography style={{margin:"20px"}} className={c.dText}>神奈川県茅ヶ崎市出身。小学生の頃に運動会に憧れ、私立開成中学/高校に進学。高校3年時には団長を務める。開成高校卒業後、東京大学理科一類(工学部)に進学。在学中はアメリカンフットボール部に所属し、新歓の代表を務める。現在は東京大学大学院工学系研究科にて技術経営戦略を専攻。</Typography>
              </div>
            </div>
          </div>
          <div className={c.sectionRoot}>
            <Typography className={c.title}>メンター陣</Typography>
            <Typography align="center" className={c.subTitle}>東京大学を中心とする<Hidden smUp><br/></Hidden>超難関大学出身のメンター約15名が<Hidden smUp><br/></Hidden>手厚くサポート</Typography>
            <img src={todai} className={c.img}/>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSffRV4o1n5cXmAMOdaEdA0uxO2rkaw07nk1gsft_KUVHwWLhQ/viewform" target="_blank" rel="noopener noreferrer" variant="contained" style={{backgroundColor:"rgba(98,164,224,0.8)"}} className={c.button}>
              <Typography style={{color:"#FFFFFF"}} className={c.dTitle}>
                メンターとして参加
              </Typography>
            </Button>
          </div>
          <div className={c.sectionRoot}>
            <Typography className={c.title}>料金</Typography>
            <div className={c.pcRoot}>
              <div style={{backgroundColor:"rgba(34,230,145,0.4)"}} className={c.pCard}>
                <div className={c.pcTop}>
                  <Typography className={c.dTitle}>無料プラン</Typography>
                  <Typography className={c.subTitle}>￥0円/月</Typography>
                </div>
                <div className={c.pcDesc}>
                  <Typography className={c.dText}>質問対応：なし</Typography>
                  <Typography className={c.dText}>自習室利用：週一回2時間</Typography>
                  <Typography className={c.dText}>マンツーマン指導：なし</Typography>
                </div>
              </div>
              <div style={{backgroundColor:"rgba(34,205,230,0.4)"}} className={c.pCard}>
                <div className={c.pcTop}>
                  <Typography align="center" className={c.dTitle}>スタンダード<Hidden smUp><br/></Hidden>プラン</Typography>
                  <Typography className={c.subTitle}>￥9,800円/月</Typography>
                </div>
                <div className={c.pcDesc}>
                  <Typography className={c.dText}>質問対応：24時間可能</Typography>
                  <Typography className={c.dText}>自習室利用：無制限</Typography>
                  <Typography className={c.dText}>マンツーマン指導：東大生による勉強計画相談を隔週30分実施</Typography>
                </div>
              </div>
              <div style={{backgroundColor:"rgba(41,206,182,0.4)"}} className={c.pCard}>
                <div className={c.pcTop}>
                  <Typography align="center" className={c.dTitle}>プレミアム<Hidden smUp><br/></Hidden>プラン</Typography>
                  <Typography className={c.subTitle}>￥29,800円/月</Typography>
                </div>
                <div className={c.pcDesc}>
                  <Typography className={c.dText}>質問対応：24時間可能</Typography>
                  <Typography className={c.dText}>自習室利用：無制限</Typography>
                  <Typography className={c.dText}>マンツーマン指導：東大生の指導を週1回2時間受講可能</Typography>
                </div>
              </div>
            </div>
          </div>
          <div name="contact" className={c.sectionRoot}>
            <Typography className={c.title}>利用登録の流れ</Typography>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>1</Typography>
              </Avatar>
              <Typography className={c.dTitle}>無料登録</Typography>
              <Typography className={c.dText} style={{padding:"1em 0"}}>下記のフォームから1分で入力完了</Typography>
            </div>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>2</Typography>
              </Avatar>
              <Typography className={c.dTitle}>体験利用</Typography>
              <Typography className={c.dText} style={{padding:"1em 0"}}>2時間1コマを体験</Typography>
            </div>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>3</Typography>
              </Avatar>
              <Typography className={c.dTitle}>カウンセリング</Typography>
              <Typography className={c.dText} style={{padding:"1em 0"}}>体験利用を踏まえて<Hidden smUp><br/></Hidden>今のお悩みやその解決法についてご相談</Typography>
            </div>
            <div className={c.sRoot}>
              <Avatar className={c.sAvater}>
                <Typography align="center">step<br/>4</Typography>
              </Avatar>
              <Typography className={c.dTitle}>有料会員登録</Typography>
              <Typography className={c.dText} style={{padding:"1em 0"}}>
                まずはスタンダードプランへの<Hidden smUp><br/></Hidden>加入がオススメです
              </Typography>
            </div>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfsIHV0H_G8s3O2bn-USNwDmTLYryVxXntQzfsfqK2v1bpevg/viewform" target="_blank" rel="noopener noreferrer" variant="contained" style={{backgroundColor:"#29CEB6"}} className={c.button}>
              <Typography style={{color:"#FFFFFF"}} className={c.dTitle}>まずは無料体験</Typography>
            </Button>
            <Button href="https://docs.google.com/forms/d/e/1FAIpQLSfsIHV0H_G8s3O2bn-USNwDmTLYryVxXntQzfsfqK2v1bpevg/viewform" target="_blank" rel="noopener noreferrer" variant="contained" style={{backgroundColor:"rgba(48,48,48,0.5)"}} className={c.button}>
              <Typography style={{color:"#FFFFFF"}} className={c.dTitle}>お問い合わせ</Typography>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
