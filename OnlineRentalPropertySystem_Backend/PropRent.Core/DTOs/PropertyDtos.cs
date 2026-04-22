using System.ComponentModel.DataAnnotations;

namespace PropRent.Core.DTOs;

public record PropertyDto(
    int Id,
    string Title,
    string Location,
    string PropertyType,
    string ListingType,
    decimal Price,
    int Bedrooms,
    int Bathrooms,
    int Parking,
    decimal SizeM2,
    string? Description,
    bool IsFeatured,
    bool IsAvailable,
    string ListingStatus,
    string? PrimaryImage,
    List<string> Images,
    List<string> Amenities,
    AgentDto? Agent,
    DateTime CreatedAt
);

public record AgentDto(
    int Id,
    string FullName,
    string Role,
    string? AvatarUrl,
    string? Phone,
    string? Email
);

public record PropertyFilterRequest(
    string? Query,
    string? ListingType,
    string? PropertyType,
    decimal? MinPrice,
    decimal? MaxPrice,
    int? MinBedrooms,
    bool? AvailableOnly,
    string? SortBy,
    int Page = 1,
    int PageSize = 12
);

public record PagedResult<T>(
    List<T> Items,
    int TotalCount,
    int Page,
    int PageSize,
    int TotalPages
);

public record CreatePropertyRequest(
    [Required][StringLength(200, MinimumLength = 3)] string Title,
    [Required][StringLength(200, MinimumLength = 3)] string Location,
    [Required] string PropertyType,
    [Required] string ListingType,
    [Required][Range(1, double.MaxValue)] decimal Price,
    [Range(0, 20)] int Bedrooms,
    [Range(1, 20)] int Bathrooms,
    [Range(0, 20)] int Parking,
    [Required][Range(1, 10000)] decimal SizeM2,
    string? Description,
    bool IsFeatured,
    int? AgentId,
    List<string> Images,
    List<string> Amenities
);

public record UpdatePropertyRequest(
    [StringLength(200, MinimumLength = 3)] string? Title,
    [StringLength(200, MinimumLength = 3)] string? Location,
    [Range(1, double.MaxValue)] decimal? Price,
    bool? IsAvailable,
    bool? IsFeatured,
    string? Description,
    string? PropertyType,
    string? ListingType,
    [Range(0, 20)] int? Bedrooms,
    [Range(1, 20)] int? Bathrooms,
    [Range(0, 20)] int? Parking,
    [Range(1, 10000)] decimal? SizeM2
);

public record UpdateListingStatusRequest(
    [Required] string Status // approved | rejected
);
