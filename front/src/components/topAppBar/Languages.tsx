import styled from '@emotion/styled';
import { Avatar, Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';
import axios from 'axios'
import { REST_COUNTRIES_API_URL } from 'constants/apiUrl'
import React, { useEffect, useState } from 'react'

interface CountriesType {
  name: {
    common: string;
    official: string;
  };
  capital: string;
  flags: {
    png: string;
  };
  region: string;
  languages: string[];
  currencies: [];
  timezones: string;
  borders: [];
}

interface CountryType {
  country: string,
  flag: string,
  language:string
}
const Languages = () => {
  const DEFAULT_CONTRY='South Korea'
  const [countries, setCountries] = useState<CountriesType[]>([])
  const [selectedContry, setSelectedCounty] = useState('')


  useEffect(()=>{
    fetchCountryData()
  }, [])

  async function fetchCountryData () {
      try {
          const response = await axios.get(REST_COUNTRIES_API_URL)
          const sortedCountries:CountriesType[] = response.data.sort((a:CountriesType,b:CountriesType) => {
            return Object.keys(a.languages)[0] > Object.keys(b.languages)[0] ? 1:-1
          })
          // console.log(sortedCountries)
          setCountries(sortedCountries)
          const defaultCountry = response.data.find( (item:CountriesType) => {
            return item.name.common === DEFAULT_CONTRY
          })
          if(defaultCountry) {
            const langKey = Object.keys(defaultCountry.languages)[0]
            setSelectedCounty(langKey)
          }
          
      } catch (error) {
          console.error('err', error)
      }
  }

  function handleChange (event:SelectChangeEvent) {
    const selecte = countries.find( (item:CountriesType) => {
      return Object.keys(item.languages)[0] === event.target.value
    })
    if(selecte){
      setSelectedCounty(Object.keys(selecte.languages)[0])
    }
  }
  
  return (
    <div>
      <FormControl sx={{minWidth: 80}}>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={selectedContry}
          onChange={handleChange}
          autoWidth
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: 200, // 원하는 최대 높이로 설정
              },
            },
          }}
          sx={{
            '.MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
            '&:hover .MuiOutlinedInput-notchedOutline': {
              border: 'none',
            },
          }}
        >
          {
            countries.map( (item, idx) => {
              if(item.languages && (Object.keys(item.languages).length > 0)) {
                return (
                  <MenuItem key={idx} value={item.languages && Object.keys(item.languages)[0]}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}>
                      <Avatar sx={{width:'17px', height:'17px'}}>
                        <img src={item.flags.png} style={{width:'26px'}}></img>
                      </Avatar>
                      <span style={{ marginLeft: '5px', fontSize: '12px'}}>
                        {Object.keys(item.languages)[0].toUpperCase()}
                      </span>
                    </Box>
                  </MenuItem>
                )
              } 
            })
          }
        </Select>
      </FormControl>
    </div>
  )
}

export default Languages