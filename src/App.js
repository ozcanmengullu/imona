import React, { Component } from "react";
import "./styles.css";
import 'antd/dist/antd.css';
import { Badge,Progress,Card,Tabs,List,Row,Col,Table  } from 'antd';
import {} from '@ant-design/icons';
import { GiCrossedSwords,GiAchievement,GiTrophyCup,GiRank3 } from 'react-icons/gi';
import { GoVerified, } from 'react-icons/go';
import { FiPlay,FiSettings } from 'react-icons/fi';
import { FcSurvey } from 'react-icons/fc';
import { AiOutlineAppstore,AiOutlineFundProjectionScreen,AiOutlineHome } from 'react-icons/ai';
import { RiStore2Line,RiMenuAddLine } from 'react-icons/ri';
import { BsPencil } from 'react-icons/bs';
import { GrLogout } from 'react-icons/gr';
import Chart from "./chart.js";


function days_between(date1, date2) {

  // The number of milliseconds in one day
  const ONE_DAY = 1000 * 60 * 60 * 24;

  // Calculate the difference in milliseconds
  const differenceMs = Math.abs(date1 - date2);

  // Convert back to days and return
  return Math.round(differenceMs / ONE_DAY);

}

const{Meta}=Card;
const { TabPane } = Tabs;
const columns = [
  {
    title: '#',
    dataIndex: 'key',
    
     
  },
  {
    title: 'Oyuncu',
    dataIndex: 'oyuncu',
    
    
  },
  {
    title: 'Puan',
    dataIndex: 'puan',
    
  },
  {
    title: 'Seviye',
    dataIndex: 'seviye',
    
  },
  {
    title: 'AksiyonSayısı',
    dataIndex: 'aksiyonSayisi',
    
  },
];
const tbl = [
  {
    key: '7',
    oyuncu:'Dev User-857' ,
    puan: 51020,
    seviye: 'level32',
    aksiyonSayisi: 64,
  },
  {
    key: '8',
    oyuncu:'Dev User-550' ,
    puan:21620,
    seviye: 'level32',
    aksiyonSayisi: 85,
  },
  {
    key: '9',
    oyuncu:'Dev User-101' ,
    puan: 20515,
    seviye: 'level32',
    aksiyonSayisi: 64,
  },
  {
    key: '10',
    oyuncu:'Dev User-800' ,
    puan: 14842,
    seviye: 'level32',
    aksiyonSayisi: 121,
  },
  {
    key: '11',
    oyuncu:'Dev User-360' ,
    puan: 12160,
    seviye: 'level32',
    aksiyonSayisi: 28,
  },
];

export class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seciliBolum:1,
      data: {
        player: {
          name: "",
          image: "",
          lastName:"",
          createdDate:"",
          motto:"",
                          
          
        },
        currentLevel: {
          displayName: "",   
          imageUrl:"",      
          
        },
        game:{
          christmas:"",
          challengeBgURL:"",
          games:"",
          displayName:"",
        },
        profileParamList: [
          {
             value: ''
           }
         ],
        collectibles:[

         ],
        activities:[
            
        ],
        missions:[        
       
        ],
  
      }

    };
      
  }
 
  componentDidMount() {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append("Authorization", "Basic ZGV2VXNlcjEwMToxMjM0");
    myHeaders.append("Content-Type", "text/plain");

    var raw = '{"id":"devUser101"}';

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow"
    };

    fetch(
      "https://dev.imona.com/platform/rest/service/gamifyit/ReadPlayerGameProfile?gameId=euroka&pageNo=1&rowPerPage=5",
      requestOptions
    )
      .then(response => response.text())
      .then(result => {
        //console.log(result);
        console.log(JSON.parse(result));
        this.setState({ data: JSON.parse(result) });
      })
      .catch(error => console.log("error", error));
  }
  renderCollectible(item) {
    return(<div>
      <img alt="" src={item.imageUrl}></img>
      <p>{item.displayName}</p>

    </div>)
  }
  renderMissions(item) {
    return(
      <Col className="gutter-row" span={4}>
        <div style={{ background: 'transparent', padding: '8px 0' }}>
        <img alt="" src={item.mission.imageUrl ? item.mission.imageUrl : 'https://cdn.pixabay.com/photo/2015/07/06/17/03/mount-833514_960_720.png'} style={{width:150,height:150}}></img>

        <p style={{whiteSpace:'nowrap',overflow:'hidden',color:'white'}}>{item.mission.displayName} </p>
        <Progress percent={item.progress} strokeWidth={20} /> 
        </div>
      </Col>
    )
    
  }
  renderMissions1(item) {
    return(
      <Col className="gutter-row" span={4}>
        <div style={{ background: 'transparent', padding: '8px 0' }}>
        <img alt="" src={item.mission.imageUrl ? item.mission.imageUrl : 'https://cdn.pixabay.com/photo/2015/07/06/17/03/mount-833514_960_720.png'} style={{width:150,height:150}}></img>

        <p style={{whiteSpace:'nowrap',overflow:'hidden',color:'white'}}>{item.mission.displayName} </p>
        <Progress percent={item.progress ? '0' : ''} strokeWidth={20} /> 
        </div>
      </Col>
    )
    
  }
  renderActivity(){
    return(
      <div>
        
      </div>
    )
  }
  callback(key) {
    console.log(key);
  }
  
  render() {
    return (
      
      <div className='body'>
              
        <div className="nav">
            <ul className="ul">
                <li>
                  <div><AiOutlineAppstore style={{fontSize:40}}></AiOutlineAppstore></div>
                  <a href="#">Oyun Seçimi</a>
                
                </li>
                <li>
                  <div><GiRank3 style={{fontSize:40}}></GiRank3></div>
                  <a href="#">Liderlik</a>
                
                </li>
                <li>
                  <div><AiOutlineHome style={{fontSize:40}}></AiOutlineHome></div>
                  <a href="#">Profil</a>
                
                </li>
                <li>
                  <div><FiPlay style={{fontSize:40}}></FiPlay></div>
                  <a href="#">Hemen Oyna</a>
                
                </li>
                <li>
                  <div><RiMenuAddLine style={{fontSize:40}}></RiMenuAddLine></div>
                  <a href="#">Genel</a>
                
                </li>
                <li>
                  <div><FiSettings style={{fontSize:40}}></FiSettings></div>
                  <a href="#">Ayarlar</a>
                
                </li>
                <li>
                  <div><FcSurvey style={{fontSize:40}}></FcSurvey></div>
                  <a href="#">Anket</a>
                
                </li>
                <li>
                  <div><GiCrossedSwords style={{fontSize:40}}></GiCrossedSwords></div>
                  <a href="#">Meydan Oku</a>
                
                </li>
                <li>
                  <div><RiStore2Line style={{fontSize:40}}></RiStore2Line></div>
                  <a href="#">Mağaza</a>
                
                </li>
                <li>
                  <div><BsPencil style={{fontSize:40}}></BsPencil></div>
                  <a href="#">Öneri</a>
                
                </li>
                <li>
                  <div><GiTrophyCup style={{fontSize:40}}></GiTrophyCup></div>
                  <a href="#">Seremoniler</a>
                
                </li>
                <li>
                  <div><AiOutlineFundProjectionScreen style={{fontSize:40}}></AiOutlineFundProjectionScreen></div>
                  <a href="#">TV Modu</a>
                
                </li>
                <li>
                  <div><GrLogout style={{fontSize:40}}></GrLogout></div>
                  <a href="#">Çıkış Yap</a>
                
                </li>
            </ul>
        </div>
        <div className="ekran">
            <div className="birinci-satir">
                <span></span>
                <span></span>
                <span className="tarih"></span>
            </div>
            <div className="sol-taraf">
            <p style={{marginLeft:25,fontSize:16}}>{this.state.data.game.displayName}</p>            
            <div>
            <Card className="kart"
                style={{ width: 270}}
                cover={
                  <img style={{objectFit:'cover',marginTop:5}}
                    alt="example"
                    src={this.state.data.player.image}
                  />                 
                }>
                <p style={{textAlign:'center',fontSize:18}}>{this.state.data.player.name}{this.state.data.player.lastName}</p>
                <Meta 
                  
                  //title={this.state.data.profileParamList[0].display_name}
                  //description={this.state.data.profileParamList[0].value}
                />
                <div style={{width:'100%',marginTop:25}}>
                  <span style={{textAlign:'left',color:'white',fontSize:18}}>{this.state.data.profileParamList[0].display_name}</span>
                  <span style={{float:'right',color:'white',fontSize:18}}>{this.state.data.profileParamList[0].value}</span>
                  <hr style={{color:'white'}}></hr>
                </div>
              </Card>                     
            </div>              
            </div> 
            <div>              
            </div>     
            <div className="sag-taraf">
              <p>{days_between(new Date(this.state.data.player.createdDate), new Date())} GÜN</p>              
            </div>
            <div className="orta">
              <p>Toplam Puan</p>
              <p>Sıralama</p>
              <p>Seviye</p>                        

            </div>
            <div className="data">
            <p>{this.state.data.totalPoint}</p>
            <p>{this.state.data.position}</p>
            <p>{this.state.data.currentLevel.displayName}</p>
            
            <div>
            
            <Progress percent={100} status="active"strokeWidth={20} style={{marginLeft:50}} />
            
            
            </div>
            
            <p>Kazanılan Rozetler</p>
            <p>Kazanılan Düellolar</p>
            <p>Tamamlanan Görevler</p> 
            <div>
            <p><Badge className="site-badge-count-109" count={this.state.data.earnedBadges} style={{ backgroundColor: '#52c41a' }} /></p>
            <p>{this.state.data.challengesWon}</p>
            <p>{this.state.data.completedMissions}</p>
            </div>
            <div>
              <p><GiAchievement style={{fontSize:70}}  /></p>
              <p><GiCrossedSwords style={{fontSize:70}}  /></p>
              <p><GoVerified style={{fontSize:70,color:'white'}} /></p>
              <div><p><img alt="" src={this.state.data.currentLevel.imageUrl}></img></p></div>
            </div> 
            </div>
        </div>
        <div >
          <div className='nav-iki'>
          <Tabs defaultActiveKey="1" onChange={this.callback} style={{ color: 'white',alignSelf:'center' }}>
            <TabPane tab="Oyuncu" key="1" >
            <div style={{float:'left',clear:'none',display:'flex',marginBottom:100}}>
              <Table columns={columns} dataSource={tbl} className='tablo'/>
              <div style={{width:550,height:350,float:'left',margin:40 }}>
              <Chart style={{color:'white'}}></Chart>
              </div>  
            </div> 
            </TabPane>
            <TabPane className='Tab' tab="Görevler" key="2">
              <Tabs defaultActiveKey="1" onChange={this.callback}>
                <TabPane tab="Görevler" key="1">
                <Row gutter={[16, 24]} style={{padding:'0 30px'}}>
                    {this.state.data.missions.map(missions => {
                      return this.renderMissions(missions)
                  })}
                </Row>    
                </TabPane>
                <TabPane tab="Bağımlı Görevler" key="2">
                <Row gutter={[16, 24]} style={{padding:'0 30px'}}>
                    {this.state.data.missions.map(missions => {
                      return this.renderMissions1(missions)
                  })}
                </Row>
                </TabPane>
                
              </Tabs>
            </TabPane>
            <TabPane tab="Rozetler" key="3">
              {this.state.data.collectibles.map(collectible => {
                return this.renderCollectible(collectible)
              })}
            </TabPane>
            <TabPane tab="Son Hareketler" key="4">
            <List style={{paddingLeft:15,paddingRight:15}}
            
            loading={false}
            itemLayout="horizontal"            
            dataSource={this.state.data.activities}
            renderItem={item => (
              <List.Item className="activities">
                  <List.Item.Meta style={{textAlign:'left'}}
                   
                    title={<p style={{color:'white',fontWeight:'bold'}}>{item.displayName}</p>}
                    description={<p style={{color:'white'}}>{item.description}</p>}
                  />
                  <div>{item.createdDate}</div>
                
              </List.Item>
            )}
                  />
            </TabPane>
          </Tabs>
          </div>         
        </div>     
      </div>     
    );
  }
}
export default index;
