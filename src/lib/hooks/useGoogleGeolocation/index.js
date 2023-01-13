import { useCallback, useEffect } from 'react'
import Geocode from 'react-geocode'

import toast from 'lib/utils/toast'
import formatGoogleLatLonResponse from './utils/formatGoogleLatLonResponse'
import formatGoogleAddressResponse from './utils/formatGoogleAddressResponse'

export default function useGoogleGeolocation() {
  const loadGeocodeSettings = useCallback(() => {
    Geocode.setApiKey('AIzaSyAkPAwCTMLlZaL-5SzsPOh3tqKPWoS6TOc')
    Geocode.setLanguage('pt-BR')
    Geocode.setRegion('es')
    Geocode.setLocationType('ROOFTOP')
  }, [])

  const getUserInitialPosition = useCallback(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async function (position) {
        const { latitude, longitude } = position.coords

        return [latitude, longitude]
      })
    } else {
      toast.info('Não tem geolocalização neste navegador')
    }
  }, [])

  const getAddressByParcialAddress = useCallback(async (address) => {
    try {
      const response = await Geocode?.fromAddress(address)

      const result = response?.results[0]

      const formatedResult = formatGoogleAddressResponse(result)

      return formatedResult
    } catch (error) {
      toast.info('Endereço imcompleto para busca')
    }
  }, [])

  const getAddressByLatLon = useCallback(async ({ lat, lng }) => {
    try {
      const response = await Geocode?.fromLatLng(String(lat), String(lng))

      const result = response?.results[0]

      const formatedResult = formatGoogleLatLonResponse(result)

      return formatedResult
    } catch (error) {
      toast.info('Latitude e/ou longitude imcompletos')
    }
  }, [])

  useEffect(() => {
    loadGeocodeSettings()
  }, [])

  return {
    getUserInitialPosition,
    getAddressByParcialAddress,
    getAddressByLatLon
  }
}
