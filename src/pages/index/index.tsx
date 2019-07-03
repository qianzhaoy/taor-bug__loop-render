import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '首页'
  }

  constructor(props) {
    super(props)
    this.state = {
      imgs: [1]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const { imgs } = this.state
    return (
      <View className='index'>
        {
          imgs && imgs.length ? imgs.map(img => {
            const a = !!img
            return (
              <View>
                {a}
              </View>
            )
          }) : <View>1</View>
        }
                {
          imgs && imgs.length ? (
            <View>{
              imgs.map(img => {
              const a = !!img
              return (
                <View>
                  {a}
                </View>
              )
            })}</View>
          ) : <View>1</View>
        }
        {
          imgs && imgs.length ? imgs.map(img => {
            const a = !!img
            return (
              <View>
                {a}
              </View>
            )
          }) : null
        }
      </View>
    )
  }
}
