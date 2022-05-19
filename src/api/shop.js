/**
 * Mocking client-server processing
 */
 const _projects = [
    {
      id: 'service_center',
      object: 'Cеть сервисных центров по ремонту телефонов FastFix.',
      result: 'Повышение дисциплины сотрудников. Быстрое решение спорных ситуаций с клиентами. Контроль пробития чеков - значительное увеличение выручки. Система окупилась за 1.5 месяца!',
      solution: '4 FullHD видеокамеры, видеоархив с возможностью хранения записей за 14 дней, просмотр с любого устройства - компьютер, телефон, планшет.',
      our_price: '34700',
      description: [
        'Наблюдение за работой сотрудников, кассовой зоной и входом в сервис',
        'Пресечение махинаций со стороны сотрудников и клиентов.'
        ],
      another_price: '36000',
      tax: true
    }
  ]
  
  export default {
    async getProjects () {
      await wait(100)
      return _projects
    },
  }
  
  function wait (ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms)
    })
  }