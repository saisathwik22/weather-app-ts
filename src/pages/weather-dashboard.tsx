import CurrentWeather from "@/components/current-weather";
import WeatherSkeleton from "@/components/loading-skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { useGeolocation } from "@/hooks/use-geolocation";
import {
  useForecastQuery,
  useReverseGeocodeQuery,
  useWeatherQuery,
} from "@/hooks/use-weather";
import { AlertTriangle, MapPin, RefreshCw } from "lucide-react";

const WeatherDashboard = () => {
  const {
    coordinates,
    error: locationError,
    getLocation,
    isLoading: locationLoading,
  } = useGeolocation();

  const weatherQuery = useWeatherQuery(coordinates);
  const forecastQuery = useForecastQuery(coordinates);
  const locationQuery = useReverseGeocodeQuery(coordinates);
  // console.log(locationQuery);

  const handleRefresh = () => {
    getLocation();
    if (coordinates) {
      // reload weather data
      weatherQuery.refetch();
      forecastQuery.refetch();
      locationQuery.refetch();
    }
  };

  if (locationLoading) {
    return <WeatherSkeleton />;
  }

  if (locationError) {
    return (
      <Alert variant='destructive'>
        <AlertTriangle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className='flex flex-col gap-4'>
          <p>{locationError}</p>
          <Button onClick={getLocation} variant={"outline"} className='w-fit'>
            <MapPin className='mr-2 h-4 w-4' />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!coordinates) {
    return (
      <Alert variant='destructive'>
        <AlertTitle>Location Required</AlertTitle>
        <AlertDescription className='flex flex-col gap-4'>
          <p>Please enable location access to see your local weather.</p>
          <Button onClick={getLocation} variant={"outline"} className='w-fit'>
            <MapPin className='mr-2 h-4 w-4' />
            Enable Location
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  const locationName = locationQuery.data?.[0];

  if (weatherQuery.error || forecastQuery.error) {
    return (
      <Alert variant='destructive'>
        <AlertTriangle className='h-4 w-4' />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription className='flex flex-col gap-4'>
          <p>Failed to fetch weather data. Please try again.</p>
          <Button onClick={handleRefresh} variant={"outline"} className='w-fit'>
            <RefreshCw className='mr-2 h-4 w-4' />
            retry
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (!weatherQuery.data || !forecastQuery.data) {
    return <WeatherSkeleton />;
  }

  return (
    <div className='space-y-4'>
      {/* Favorite Cities */}
      <div className='flex items-center justify-between'>
        <h1 className='text-xl font-bold tracking-tight'>My Location</h1>
        <Button
          variant={"outline"}
          size={"icon"}
          onClick={handleRefresh}
          // disabled={}
        >
          <RefreshCw
            className={`h-4 w-4 ${
              weatherQuery.isFetching ? "animate-spin" : ""
            }`}
          />
        </Button>
      </div>
      {/* Current and Hourly weather */}

      <div className='grid gap-6'>
        <div>
          <CurrentWeather
            data={weatherQuery.data}
            locationName={locationName}
          />

          {/* hourly temperature */}
        </div>
        <div>
          {/* details */}
          {/* forecast */}
        </div>
      </div>
    </div>
  );
};

export default WeatherDashboard;
