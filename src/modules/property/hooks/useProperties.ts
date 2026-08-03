import { useState, useEffect } from 'react';
import { PropertyItem } from '../types/properties';
import { propertyService } from '../services/propertyService';

export function useProperties() {
  const [properties, setProperties] = useState<PropertyItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    propertyService.getProperties().then((data) => {
      setProperties(data);
      setLoading(false);
    });
  }, []);

  const handleAddProperty = (prop: PropertyItem) => {
    setProperties((prev) => [...prev, prop]);
  };

  const handleDeleteProperty = (id: string) => {
    setProperties((prev) => prev.filter((p) => p.id !== id));
  };

  return {
    properties,
    loading,
    searchQuery,
    setSearchQuery,
    handleAddProperty,
    handleDeleteProperty,
  };
}
